export const EditorStatusBar=({path,dirty}:any)=><footer className='statusbar'><span>{path||'No file'}</span><span>{dirty?'Unsaved':'Saved'}</span></footer>;
