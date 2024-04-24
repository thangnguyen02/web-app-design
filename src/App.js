import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { router } from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {router.map((r) => (
            <Route id={r.id} path={r.path} element={r.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
