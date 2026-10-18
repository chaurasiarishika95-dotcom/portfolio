export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return res.status(405).json({error:"Method not allowed"}); }
  const expected=process.env.ADMIN_PASSWORD;
  if (!expected || (req.headers.authorization||"") !== `Bearer ${expected}`) return res.status(401).json({error:"Invalid admin password"});
  const token=process.env.GITHUB_TOKEN, owner=process.env.GITHUB_OWNER, repo=process.env.GITHUB_REPO, branch=process.env.GITHUB_BRANCH||"main";
  if(!token||!owner||!repo) return res.status(500).json({error:"Missing GitHub environment variables"});
  const payload=req.body; if(!payload||!Array.isArray(payload.projects)||!Array.isArray(payload.companies)) return res.status(400).json({error:"Invalid portfolio data"});
  const url=`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/portfolio-data.json`;
  try { const headers={Accept:"application/vnd.github+json",Authorization:`Bearer ${token}`,"X-GitHub-Api-Version":"2022-11-28","User-Agent":"Rishika-Portfolio-CMS"}; const current=await fetch(`${url}?ref=${encodeURIComponent(branch)}`,{headers}); let sha; if(current.ok)sha=(await current.json()).sha; else if(current.status!==404)return res.status(502).json({error:"Could not read current GitHub file"});
    const content=Buffer.from(JSON.stringify({...payload,updatedAt:new Date().toISOString()},null,2)).toString("base64"); const update=await fetch(url,{method:"PUT",headers:{...headers,"Content-Type":"application/json"},body:JSON.stringify({message:"Update portfolio content from admin dashboard",content,branch,...(sha?{sha}:{})})}); const result=await update.json(); if(!update.ok)return res.status(502).json({error:result.message||"GitHub update failed"}); return res.status(200).json({ok:true,commit:result.commit?.sha||null});
  } catch(e) { return res.status(500).json({error:"Publish request failed"}); }
}
