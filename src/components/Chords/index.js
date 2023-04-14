import toHtml from "../../util/toHtml";
import { UkeChords } from "./ukulele";

const ChordsList = (()=>{
  const el = toHtml(`<div class='chords-list w-[30%]'></div>`);

  const display = (song)=>{
    while(el.firstChild)
      el.firstChild.remove();
    const chordsList = [...new Set(
        [...song.querySelectorAll(".chord:not(:empty)")]
          .map(el=>el.textContent.replace("#","s").replace("m","min"))
      )].sort((a,b)=>a.localeCompare(b))

    chordsList.forEach(chord => el.append( UkeChords.querySelector(`.ukulele.${chord}`)?.cloneNode(true) ))

  }

  return {
    display,
    el
  }

})();

export default ChordsList;
