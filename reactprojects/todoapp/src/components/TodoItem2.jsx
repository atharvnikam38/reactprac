function Todoitem2(){

  let toddoname='Buy Til';
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

export default Todoitem2;