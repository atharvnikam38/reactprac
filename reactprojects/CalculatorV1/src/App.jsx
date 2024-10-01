import './App.css'
import style from './App.module.css';
import ButtonContainer from './components/buttonconatiner';
import Display from './components/display';
function App() {


  return (
   <div className={style.calculator}>
    <Display/>
    <ButtonContainer />
   </div>
  )
}

export default App
