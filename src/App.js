import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// Components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftchild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽클릭")} />
          }
          rightchild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽클릭")}
            />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"default"}
        />
        {/* <img src={process.env.PUBLIC_URL + "/assets/emotion1.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/emotion2.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/emotion3.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/emotion4.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/emotion5.png"} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
