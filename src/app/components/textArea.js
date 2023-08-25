import '../../css/App.css';

const saveNote = () => {
    const textareaContent = document.getElementById("main-textarea").value;
    localStorage.setItem(localStorage.length + 1, textareaContent)
    document.getElementById("main-textarea").value = "";
}

function TextArea() {
  return (
    <div className="TextArea">
      <textarea id="main-textarea" className="main-textarea"></textarea>        
      <button onClick={saveNote} className='save-note-button'>SAVE</button>
    </div>
  );
}

export default TextArea;
