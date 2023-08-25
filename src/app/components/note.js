import '../../css/App.css';

import { useState } from "react"

function Note() {
  const [noteContent, setNoteContent] = useState("");

  const settingNoteContent = (index) => {
    document.getElementById("text-popup").textContent = "";
    setNoteContent(localStorage.getItem(index+1))
    const popup = document.getElementById("popup-note")
    const textPopup = document.getElementById("text-popup")
    textPopup.textContent = noteContent
    popup.style.visibility = "visible"
  }

  const creatingDataArray = () => {
    var index = 1;
    const amountData = [];
    while (index !== localStorage.length + 1) {
      amountData.push(index)
      index++
    }
    return(amountData)
  }

  const amountData = creatingDataArray()

  return (
    <div className="Note">
        <div className='popup-note' id="popup-note">
          <h3 className='text-popup' id="text-popup"></h3>
        </div>
        {amountData.map((item, index) => (
          <button key={index} onClick={() => settingNoteContent(index)}>{item}</button>
        ))}
    </div>
  );
}

export default Note;
