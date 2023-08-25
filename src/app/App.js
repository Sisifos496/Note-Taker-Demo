import '../css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/home.js";
import Main from "./components/main.js";
import Note from "./components/note.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/main" element={<Main />}>
          </Route>
          <Route path="/note" element={<Note />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
