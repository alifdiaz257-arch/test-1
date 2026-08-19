export const FileTreeItem=({item,onOpen}:any)=><button className='tree-item' onClick={()=>onOpen(item)}>{item.type==='tree'?'▾':'□'} {item.path}</button>;
