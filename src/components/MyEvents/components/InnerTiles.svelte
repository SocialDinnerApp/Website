<script>
  export let item;
  import Icon from "@iconify/svelte";
</script>

<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="item align-middle">
        <Icon icon="bytesize:location" color="A785B9" width="30px" />
      </div>
      <div class="card-body">
        <p class="card-text text-light align-middle">{item.date}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="item align-middle">
        <Icon icon="bx:bx-calendar"  color="A785B9" width="30px" />
      </div>
      <div class="card-body ">
        <p class="card-text text-light align-middle ">{item.city}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="item align-middle">
        <Icon icon="oi:euro" color="A785B9" width="25px" />
      </div>
      
      <div class="card-body">
        <p class="card-text text-light justify-content-center align-middle" style="position: relative; top:2px;">{item.fee}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    background-color: #fff;
    max-width: 9rem;
    max-height: 9rem;
    color: #333;
    border-color: EEEEEE;
    border-radius: 15px;
    padding: 8px 0px;
    margin: 0px 0px;
    position:relative;
    text-align: center;
    padding-top: 15px;
    
  }
  .card-body{
  height: 55px;
  text-align:center;
  position: relative;
  top: 4px;

  }
</style>
