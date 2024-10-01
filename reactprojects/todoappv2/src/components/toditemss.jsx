import Todoitem from "./TodoItem";
const Todoitemss = ({ todoItems }) => {

  return   (<div className="items-container">
    
    {
      todoItems.map((item) =>
         (<Todoitem todoitem={item.duedate} toddoname ={item.name}  ></Todoitem>)
      )
    }
 

  


</div>);

};
export default Todoitemss;
