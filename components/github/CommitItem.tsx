export const CommitItem=({commit}:any)=><div className='commit-item'><b>{commit.commit?.message?.split('\n')[0]}</b><small>{commit.sha?.slice(0,7)} · {commit.commit?.author?.name}</small></div>;
