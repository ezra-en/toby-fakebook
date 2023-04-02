import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';
import { WebrtcProvider } from 'y-webrtc';
import { MonacoBinding } from 'y-monaco';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';

const Editor = ({selector}) => {

  const ydoc = new Y.Doc();
  // define a shared text type on the document
  const provider = new WebrtcProvider('monaco', ydoc);
  const ytext = ydoc.getText('monaco');
  const persistence = new IndexeddbPersistence('monaco', ydoc);
  // create an editor-binding which binds the quill editor
  //  to a Y.Text type
  const el = document.querySelector(selector);
  el.className=styles.Editor;
  const editor = monaco.editor.create(
    el,
    {
      value: '',
      theme: 'vs-dark'
    }
  );
  const binding = new MonacoBinding(
    ytext,
    editor.getModel(),
    new Set([editor]),
    provider.awareness
  );

  provider.connect();

}



export default Editor;