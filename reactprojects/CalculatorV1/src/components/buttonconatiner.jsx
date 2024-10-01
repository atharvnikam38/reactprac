
import style from './buttonconatiner.module.css';
const ButtonContainer = () => {

  const buttonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'
  ];

  return <div className={style.buttonContainer}>
    {buttonNames.map(buttonNames => <button className={style.button}>{buttonNames}</button>)}


  </div>

};

export default ButtonContainer;