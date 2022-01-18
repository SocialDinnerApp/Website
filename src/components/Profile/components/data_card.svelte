
<script>
    export let info 
    import { push } from "svelte-spa-router";
    console.log(info)
    
   
    
    
    function onClickTile() {
        push('#/profile/edit');
       // console.log('Ja')
    }
</script>

<div class="card-body">
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">Username</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        {info.Username}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">Universität</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        {info.Universität}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">Email</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        {info.Email}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">Phone</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        {info.Phone}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">City</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        {info.City}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">faculty</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        {info.faculty}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-3">
        <h6 class="mb-0">Passwort</h6>
        </div>
        <div class="col-sm-9 text-secondary" type="password">
        {info.Passwort}
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12">
            <button on:click={onClickTile}
            type="button"
            class="btn btn-primary py-2 px-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModa">
                Edit 
            </button>
        </div>
    </div>
</div>

