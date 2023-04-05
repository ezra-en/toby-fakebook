import ChordSheetJS from 'chordsheetjs';
import toHtml from '../../util/toHtml';


const ChordProViewer = (selector) => {
  const displayEl = document.querySelector(selector);
  const display = (chordSheet) =>{
    while(displayEl.firstChild)
      displayEl.firstChild.remove();

    const parser = new ChordSheetJS.ChordProParser();
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    
    const song = parser.parse(chordSheet);

    displayEl.append(toHtml(`<div>${formatter.format(song)}</div>`))
  }

  return {
    display
  }
}

export default ChordProViewer;