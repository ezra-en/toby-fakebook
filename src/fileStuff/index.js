import { set } from 'idb-keyval';

export const isSupported = () =>
  typeof window.showDirectoryPicker === 'function';

const readWriteOptions = { mode: 'readwrite' };

export const setRootDirectory = async() => {
    const handle = await (window.showDirectoryPicker());
    if(!handle){
        return undefined;
    }
    let granted = (await handle.queryPermission(readWriteOptions))==='granted';
    if(!granted){
        granted = (await handle.requestPermission(readWriteOptions)) === 'granted';
    }
    return { handle, granted}
}

export const getFileHandle = async(name, directoryHandle) => {
    for await(const handle of directoryHandle?.values()){
        const relativePath = (await directoryHandle.resolve(handle)) || [];
        if(relativePath?.length === 1 && relativePath[0]===name){
            return handle;
        }
    }
    // if a matching file handle wasn't found
    return undefined;
}

export const createFileHandle = async(name, directoryHandle) => {
    return await directoryHandle.getFileHandle(name, {create: true});
}

export const writeContentToFile = async(fileHandle, content) => {
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
}

export const updateFileContent = async(file, fileHandle, content) => {
    await writeContentToFile(fileHandle, content);
    await set(file.name,JSON.stringify({
        name: file.name,
        content,
        lastModified: file.lastModified
    }))
}