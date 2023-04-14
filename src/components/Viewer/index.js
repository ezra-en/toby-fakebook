import ChordSheetJS from 'chordsheetjs';
import toHtml from '../../util/toHtml';


const ChordProViewer = (selector) => {
  let listeners = [];
  const displayEl = document.querySelector(selector);
  const display = (chordSheet) =>{
    while(displayEl.firstChild)
      displayEl.firstChild.remove();

    const parser = new ChordSheetJS.ChordProParser();
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    
    const song = parser.parse(chordSheet);
    const formattedSong = toHtml(`<div>${formatter.format(song)}</div>`)
    displayEl.append(formattedSong)

    listeners.forEach(listener=>listener(formattedSong));
  }

  const subscribe = (listener)=>listeners = [...listeners, listener];
  const unsubscribe = (listener) => listeners = listeners.filter(func=>func!==listener);

  return {
    display,
    subscribe,
    unsubscribe
  }
}

export default ChordProViewer;