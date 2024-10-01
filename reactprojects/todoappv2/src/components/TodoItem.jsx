function Todoitem({ toddoname,todoitem}){



  return <div className="container"> 
  
  <div className="row atrow">
  <div className="col-6">
    {toddoname}
  </div>
  <div className="col-4"> {todoitem}
  </div>
  <div className="col-2"> <button type="button" className="btn btn-danger atbutton">Delete</button>
  </div>
</div>
</div> 
}

export default Todoitem;