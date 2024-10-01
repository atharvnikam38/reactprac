import style from "./Item.module.css"
const Item = ({foodItem}) => {

  const handelonclick = (event) =>{
   console.log(`${foodItem} clicked`)
  };

  return ( 
  <li  className ={ `${style['atharv']} list-group-item` }> 
   <span className={style['atharvit']}> {foodItem}  </span>

   <button onClick={(event) =>handelonclick(event)} className={`${style.button} btn btn-info`}> Buy </button>
   </li>  
   );


 
};

export default Item;