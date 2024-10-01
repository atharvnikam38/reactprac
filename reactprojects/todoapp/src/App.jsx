import Addtodo from "./components/AppTodo";
import Todoitem1 from "./components/TodoItem";
import Todoitem2 from "./components/TodoItem2";
import AppName from "./components/AppName";
import "./App.css";
function App() {


  return <center className="todo-container">
    <AppName />
    <Addtodo />
    <div className="items">
    <Todoitem1 ></Todoitem1>
    <Todoitem2 >   </Todoitem2>
  
</div>


  </center>

}

export default App
