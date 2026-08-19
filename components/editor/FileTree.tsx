import {FileTreeItem} from './FileTreeItem';export const FileTree=({items,onOpen}:any)=><div className='file-tree'>{items.map((i:any)=><FileTreeItem key={i.path} item={i} onOpen={onOpen}/>)}</div>;
