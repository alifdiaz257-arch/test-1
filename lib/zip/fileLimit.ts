export const MAX_ZIP_FILES=1000;export function validateZipFiles(f:any[]){if(f.length>MAX_ZIP_FILES)throw Error('Too many files');return true}
