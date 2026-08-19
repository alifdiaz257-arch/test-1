import {CommitItem} from './CommitItem';export const CommitList=({commits=[]}:any)=><div>{commits.map((c:any)=><CommitItem key={c.sha} commit={c}/>)}</div>;
