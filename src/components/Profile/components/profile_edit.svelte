
<script lang='ts'>
     import { pop } from "svelte-spa-router";
    import {info} from "./info"
    import ProfilePictureCard from "./profile_picture_card.svelte";
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
                <div class="col-md-4 align-self-center" style="margin-top: 20px;">
                    <ProfilePictureCard/>
                </div>
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0 text-primary">Username</h6>
                                </div>
                                <div class="col-sm-9 ">
                                    <input type="text" class="form-control" value='{i.Username}'>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0 text-primary">Universität</h6>
                                </div>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" value='{i.Universität}'>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0 text-primary">Email</h6>
                                </div>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" value='{i.Email}'>
                                </div>
                            </div>
            
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0 text-primary">City</h6>
                                </div>
                                <div class="col-sm-9 ">
                                    <input type="text" class="form-control" value='{i.City}'>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0 text-primary">faculty</h6>
                                </div>
                                <div class="col-sm-9 ">
                                    <input type="text" class="form-control" value='{i.faculty}'>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0 text-primary">Passwort</h6>
                                </div>
                                <div class="col-sm-9">
                                
                                    <input type="password" class="form-control" id="password" value='{i.password}'/>
                                </div>
                            </div>
                            <div class="row">
                              
                                <div class="text-primary  d-flex justify-content-center">
                                    <input type="button" class="btn btn-primary px-4 " value="Speichern" on:click={() => pop()}>
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