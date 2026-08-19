export type GithubUser={login:string;id:number;avatar_url:string;name:string|null;email:string|null;html_url:string};
export type GithubRepo={id:number;name:string;full_name:string;private:boolean;default_branch:string;description:string|null;html_url:string;language:string|null;stargazers_count:number;forks_count:number;updated_at:string};
export type GithubTreeItem={path:string;mode:string;type:'blob'|'tree';sha:string;size?:number};
export type GithubCommit={sha:string;html_url:string;commit:{message:string;author:{name:string;date:string}|null}};
