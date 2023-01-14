import logo from "./logo.svg";
import "./App.css";
import MainRoute from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
