import "./style.css";
import { store } from "./src/services/store";

import configStore from './src/services/config';

import * as filer from './src/fileStuff';

import Header from './src/templates/header';
import Layout from './src/templates/layout';
import Editor from "./src/components/Editor";
import ChordProViewer from "./src/components/Viewer";
import ChordsList from './src/components/Chords';
import toHtml from "./src/util/toHtml";
const name = 'test-file.chordpro';

const setColor = () =>{
  document.documentElement.dataset.theme=configStore.getValue('colorMode');
  document.documentElement.style.colorScheme=configStore.getValue('colorMode');  
}
let directoryHandle, fileHandle;

const setupSave = async ()=> {
  if(filer.isSupported()){
    const directoryHandleResponse = await filer.setRootDirectory()
    directoryHandle = await directoryHandleResponse.handle;

    fileHandle = await filer.getFileHandle(name, directoryHandle);
  
    if(!fileHandle){
      fileHandle = await filer.createFileHandle(name, directoryHandle);
    }

console.log(fileHandle);  
  }
}

const updateSave = async(content) => {
  if(fileHandle){
    const newFile = await fileHandle.getFile();
    await filer.updateFileContent(newFile, fileHandle, content);
    return;
  }
}
Layout.querySelector(".set-save").addEventListener("click", setupSave);
setColor();

document.querySelector('#app').append(Header, Layout);

Header.querySelector(".light-switch").addEventListener("click", (e)=>{
  configStore.setValue('colorMode', configStore.getValue('colorMode')==='dark' ? 'light' : 'dark');
  e.currentTarget.querySelector("i").classList.toggle("bi-brightness-high");
  e.currentTarget.querySelector("i").classList.toggle("bi-moon-stars");
})
Layout.querySelector('.main-content').append(
  toHtml(`<div class='editor w-[30%]' />`),
  toHtml("<div class='song-view w-[30%]' />"),
  ChordsList.el);
const editor = Editor({selector: '.editor'});
let viewer = ChordProViewer('.song-view');
editor.subscribe(viewer.display);
editor.subscribe( updateSave );
viewer.subscribe(ChordsList.display);
configStore.addValueListener('colorMode', setColor);