import style from './Foodinput.module.css'
const Foodinput = () => {

  const handelonchange = (event) =>{
    console.log(event.target.value);
  }

  return <>
    <input type="text" 
    placeholder="Enter food item" 
    className={style.inp} 
    onChange={handelonchange} />

  </>


}

export default Foodinput;