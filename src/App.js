import './App.css';
import Quote from "./components/Quote";
import Sidenavigation from "./components/Sidenavigation";

function App() {
  return (
    <div className="contnet">
        <div className="App">
          <Quote></Quote>
        </div>
      
      <Sidenavigation></Sidenavigation>
    </div>
  );
}

export default App;
