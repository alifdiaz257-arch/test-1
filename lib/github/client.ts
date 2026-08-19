export async function api<T>(u:string,o?:RequestInit){const r=await fetch(u,o);const d=await r.json();if(!r.ok)throw Error(d.error||'Request failed');return d as T;}
