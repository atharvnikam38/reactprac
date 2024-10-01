import React from 'react'
import "./App.css"
import FoodItems from './components/FoodItems';
import Erromessage from './components/error';
import Container from './components/Container';
import Foodinput from './components/Foodinput';

function App(){
  let fooditem =["dal","Green Vegetable","Roti","chicken"];
  return  <> <Container>  
  
 
    <h1 className='foodhead'>
      
      Healthy Foods
     
    </h1>  
    <Foodinput/>
    <Erromessage items={fooditem}></Erromessage>
    <FoodItems items={fooditem} ></FoodItems>  
   </Container>  
   {/* <Container>
      <p>above is the list of food requred </p>
    </Container>*/} </>  

   
}
export default App;