'use client';export function UserMenu(){return <button className='btn btn-secondary' onClick={async()=>{await fetch('/api/auth/logout',{method:'POST'});location.href='/login'}}>Logout</button>}
