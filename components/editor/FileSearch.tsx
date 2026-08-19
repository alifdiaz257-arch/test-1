'use client';export function FileSearch({onChange}:any){return <input className='input' placeholder='Search files...' onChange={e=>onChange(e.target.value)}/>}
