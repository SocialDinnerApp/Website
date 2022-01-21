<script>
  export let item;
  import InnerTiles from "./InnerTiles.svelte";
</script>

<!-- Erstellen der karte-->
<div class="col d-flex justify-content-center">
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="images/dhbw.jpg" class="img-fluid" />
      </div>

      <div class="col-md-8">
        <div class="row g-0">
          <div class="col-sm-1" />
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.text}</p>
              <InnerTiles bind:item />
              
            </div>
            <p class="card-text p-2 flex-fill bd-highlight" >
              <small class="text-muted ">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    max-width: 1090px;
    height: auto;
    margin: 30px 20px;
    position: center;
  }
  img {
    float:center;
    display: block;
    width: 370px;
    max-height: 320px;
  
   
  
    border-radius: 15px 0px 0px 15px;
  }
</style>
