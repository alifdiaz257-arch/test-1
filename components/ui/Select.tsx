'use client';export function Select({children,...p}:any){return <select {...p} className={`input ${p.className||''}`}>{children}</select>}
