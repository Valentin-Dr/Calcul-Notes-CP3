import { Route, Routes } from "react-router-dom";
import './App.scss';
import About from "./Components/About";
import Main from './Components/Main';
import Menu from './Components/Menu';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
