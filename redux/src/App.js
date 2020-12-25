import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div className="App m-5">
      <h1>Todo app</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
