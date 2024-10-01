function Todoitem1(){

  let toddoname='Buy Multi grain bread';
  let todoitem='21/9/24';

  return <div className="container"> 
  
  <div class="row atrow">
  <div class="col-6">
    {toddoname}
  </div>
  <div class="col-4"> {todoitem}
  </div>
  <div class="col-2"> <button type="button" class="btn btn-danger atbutton">Delete</button>
  </div>
</div>
</div> 
}

export default Todoitem1;