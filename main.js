import "./style.css";
import { store } from "./src/services/store";
import configStore from './src/services/config';

import Header from './src/templates/header';
import Layout from './src/templates/layout';

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


configStore.addValueListener('colorMode', setColor);