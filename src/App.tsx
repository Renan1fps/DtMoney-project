import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Global } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>  
      <Global/>
    </div>
  );
}

export { App };
