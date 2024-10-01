import Item from "./item";
const FoodItems = ({items}) =>{
// let fooditem=[];

  return (
      <ul className="list-group">
  {items.map((item,index)=> ( <Item key={item} foodItem={item}> </Item>))}
</ul> 
  );

  
  
  
  
 
};

export default FoodItems;