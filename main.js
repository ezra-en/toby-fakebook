import "./style.css";
import { store } from "./src/services/store";
import configStore from './src/services/config';

import Header from './src/templates/header';
import Layout from './src/templates/layout';
import Editor from "./src/components/Editor";
import ChordProViewer from "./src/components/Viewer";
import ChordsList from './src/components/Chords';
import toHtml from "./src/util/toHtml";

const setColor = () =>{
  document.documentElement.dataset.theme=configStore.getValue('colorMode');
  document.documentElement.style.colorScheme=configStore.getValue('colorMode');  
}

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
viewer.subscribe(ChordsList.display);
configStore.addValueListener('colorMode', setColor);