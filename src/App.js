import "./App.css";
import Appbar from "./Components/Appbar.js"
import Content from "./Components/Content.js";
function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Appbar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;