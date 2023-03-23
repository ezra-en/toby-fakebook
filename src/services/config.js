import {createStore, createLocalPersister} from 'tinybase';
import * as initialConfig from '../defaultConfig.json'; 

const configStore = createStore();
const configPersister = createLocalPersister(configStore, 'siteConfig');

configPersister.startAutoLoad( {}, initialConfig );
configPersister.startAutoSave();

export default configStore;