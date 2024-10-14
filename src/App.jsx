import AddTodo from "./components/AddTodo";
import './App.css'
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <>
      <h1>Task</h1>
      <AddTodo />
      <TodoItems/>
    </>
  );
}

export default App;
