export const sanitizePath=(p:string)=>p.replaceAll('\\','/').replace(/^\/+/, '').split('/').filter(x=>x!=='.'&&x!=='..').join('/');
