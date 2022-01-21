<script>
    export let item
    import InnerTiles from "./InnerTiles.svelte";
</script>



<!-- Erstellen der karte-->
<div class="col d-flex justify-content-center">

  <div class="card ">
    <div class="row g-0">
      <div class="col-md-4">
        <img src='images/dhbw.jpg' class="img-fluid rounded">
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.description}</p>
            <InnerTiles bind:item/>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
    margin: 30px 20px;
    position: center;
    
    
  }
  img {
    float: right;
    display: block;
    width: auto;
    max-height: 280px;
    margin-top: 0px;
    margin-bottom: 0px;
    
}
</style>