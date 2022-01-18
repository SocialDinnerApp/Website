
<script lang='ts'>
    export let info 
  
    console.log(info)
    
   
    
    

</script>

<div class="card-body">
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0 text-primary">Username</h6>
        </div>
        <div class="col-sm-9 ">
        {info.Username}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0 text-primary">Universität</h6>
        </div>
        <div class="col-sm-9">
        {info.Universität}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0 text-primary">Email</h6>
        </div>
        <div class="col-sm-9 ">
        {info.Email}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0 text-primary">City</h6>
        </div>
        <div class="col-sm-9 ">
        {info.City}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0 text-primary">faculty</h6>
        </div>
        <div class="col-sm-9 ">
        {info.faculty}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0 text-primary">Passwort</h6>
        </div>
        <div class="col-sm-9 " type="password">
        {info.password}
        </div>
    </div>
    
    
</div>



