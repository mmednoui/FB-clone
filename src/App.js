
import './App.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widget from "./Widget";
import { useStateValue } from "./StateProvider";

function App() {
const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? 
      <Login /> 
      : <div>
          <Navbar />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>}
        
     
    </div>
  );
}

export default App;
