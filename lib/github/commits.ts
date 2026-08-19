import {githubFetch} from './server';export const getCommits=(o:string,r:string,b?:string)=>githubFetch(`/repos/${o}/${r}/commits?per_page=50${b?'&sha='+encodeURIComponent(b):''}`);
