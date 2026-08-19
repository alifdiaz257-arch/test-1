import {cookies} from 'next/headers';
export const SESSION_COOKIE='bluegit_session';
export async function getSession(){const c=await cookies();const v=c.get(SESSION_COOKIE)?.value;if(!v)return null;try{return JSON.parse(Buffer.from(v,'base64url').toString())}catch{return null}}
export const encodeSession=(x:object)=>Buffer.from(JSON.stringify(x)).toString('base64url');
