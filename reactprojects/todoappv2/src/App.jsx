import Addtodo from "./components/AppTodo";

import Todoitemss from "./components/toditemss";
import AppName from "./components/AppName";
import "./App.css";
function App() {
  const todoItem=[
    {
      name:"Buy Multi grain bread",
      duedate:"21/9/24"
    },
    {
      name:"Milk",
      duedate:"21/9/24"
    },
    {
      name:"Butter",
      duedate:"21/9/24"
    }
  ]



  return( <center className="todo-container">
    <AppName />
    <Addtodo />
 <Todoitemss todoItems={todoItem} />
   
    
    
   
  

</center>


);
}

export default App;
