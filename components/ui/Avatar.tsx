export function Avatar({src,name='U'}:any){return src?<img className='avatar' src={src} alt={name}/>:<span className='avatar avatar-fallback'>{name[0]}</span>}
