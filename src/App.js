
import "./App.css";
import Counter from "./components/Counter";
import HeadingHover from "./components/HeadingHover";
import Show from "./components/Show";

function App() {
  
  return (
    <div className="App">
      <Counter name="abc" />
      <HeadingHover />
      <Show />
    </div>
  );
}

export default App;
