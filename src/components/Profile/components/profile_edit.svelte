
<script>
     import { pop } from "svelte-spa-router";
    import {info} from "./info"
    //import ProfilePictureCard from "./components/profile_picture_card.svelte";
     console.log(info[0])
     const i =info[0]
</script>


<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>  
    <div class="d-flex border-light border-bottom border-1 justify-content-between">
        <h1 class="text-primary">Profile</h1>
        <p class="text-secondary" on:click={() => pop()}>zurück</p>
    </div>

    <div class="container">
        <div class="main-body">
            <div class="row gutters-sm">
                <div class="col-md-4" style="margin-top: 20px;">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src={i.image} alt="Admin" class="rounded-circle" width="150">
                                    <div class="mt-3">
                                    <h4>{i.Universität}</h4>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Username</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value='{i.Username}'>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Universität</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value='{i.Universität}'>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value='{i.Email}'>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Phone</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value='{i.Phone}'>
                                </div>
                            </div>
            
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">City</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value='{i.City}'>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Passwort</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                
                                    <input type="password" class="form-control" id="password" value='{i.password}'/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="button" class="btn btn-primary px-4" value="Save Changes" on:click={() => pop()}>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .card{
        margin-top: 20px;
    }
</style>