'use client';export const useZip=()=>async(files:any[])=>(await fetch('/api/zip',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({files})})).json();
