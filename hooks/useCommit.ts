'use client';export const useCommit=()=>async(body:any)=>(await fetch('/api/github/repo/update-file',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})).json();
