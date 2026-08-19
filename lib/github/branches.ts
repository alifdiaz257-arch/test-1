import {githubFetch} from './server';export const getBranches=(o:string,r:string)=>githubFetch(`/repos/${o}/${r}/branches?per_page=100`);
