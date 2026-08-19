import {githubFetch} from './server';export const getRepos=()=>githubFetch('/user/repos?per_page=100&sort=updated');
