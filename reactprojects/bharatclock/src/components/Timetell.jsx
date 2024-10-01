function Timetell(){

  let times=new Date();
  

  return <p>
    this is the current time : {times.toLocaleDateString()} -{
      times.toLocaleTimeString()
    }


  </p>


}

export default Timetell