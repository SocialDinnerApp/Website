<script lang="ts">
    import { UserService } from "../../../services/User";
    import { onMount } from "svelte";

    var username: string = "";
    var email: string = "";
    var password: string = undefined;
    var faculty: string = "";
    var city: string = "";
    var university: string = "";
    let user: Array<any> = [];



    onMount(async () => {
        const response = await UserService.getuser();
        console.log(response);
        if (response) {
            user = response[0] as Array<any>;
            console.log(user);
                username = user.username,
                email = user.email,
                faculty = user.faculty,
                city = user.city,
                university = user.university;
                password=user.password
                
           // console.log(user.username);
        } else {
            console.log("Geht nicht");
        }
    });
</script>

<div class="card">
    <div class="card-body p-4" style="max-width: 1500px;">
        <div class="row">
            <div class="col-sm-12">
                <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                        Accountdaten
                    </h6>
                    <div class="row">
                        <div class="col-sm-4">
                            <p class="m-b-10 f-w-600">Username</p>
                            <h6 class="text-muted f-w-400">{username}</h6>
                        </div>
                        <div class="col-sm-4">
                            <p class="m-b-10 f-w-600">Passwort</p>
                            <h6 class="text-muted f-w-400" id="password" type="password" >********</h6>
                        </div>
                        <div class="col-sm-4">
                            <p class="m-b-10 f-w-600">Email</p>
                            <h6 class="text-muted f-w-400">{email}</h6>
                        </div>
                    </div>
                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Information
                    </h6>
                    <div class="row">
                        <div class="col-sm-4">
                            <p class="m-b-10 f-w-600">Universität</p>
                            <h6 class="text-muted f-w-400">{university}</h6>
                        </div>
                        <div class="col-sm-4">
                            <p class="m-b-10 f-w-600">Stadt</p>
                            <h6 class="text-muted f-w-400">{city}</h6>
                        </div>
                        <div class="col-sm-4">
                            <p class="m-b-10 f-w-600">Einrichtung</p>
                            <h6 class="text-muted f-w-400">{faculty}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    body {
        background-color: #f9f9fa;
    }

    .padding {
        padding: 3rem !important;
    }

    .user-card-full {
        overflow: hidden;
    }

    .card {
        border-radius: 5px;
       
        border: none;
        
    }

    .m-r-0 {
        margin-right: 0px;
    }

    .m-l-0 {
        margin-left: 0px;
    }

    .user-card-full .user-profile {
        border-radius: 5px 0 0 5px;
    }

    .bg-c-lite-green {
        background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#f29263),
            to(#ee5a6f)
        );
        background: linear-gradient(to right, #ee5a6f, #f29263);
    }

    .user-profile {
        padding: 20px 0;
    }

    .card-block {
        padding: 1.25rem;
    }

    .m-b-25 {
        margin-bottom: 25px;
    }

    .img-radius {
        border-radius: 5px;
    }

    h6 {
        font-size: 14px;
    }

    .card .card-block p {
        line-height: 25px;
    }

    @media only screen and (min-width: 1400px) {
        p {
            font-size: 14px;
        }
    }

    .card-block {
        padding: 1.25rem;
    }

    .b-b-default {
        border-bottom: 1px solid #e0e0e0;
    }

    .m-b-20 {
        margin-bottom: 20px;
    }

    .p-b-5 {
        padding-bottom: 5px !important;
    }

    .card .card-block p {
        line-height: 25px;
    }

    .m-b-10 {
        margin-bottom: 10px;
    }

    .text-muted {
        color: #919aa3 !important;
    }

    .b-b-default {
        border-bottom: 1px solid #e0e0e0;
    }

    .f-w-600 {
        font-weight: 600;
    }

    .m-b-20 {
        margin-bottom: 20px;
    }

    .m-t-40 {
        margin-top: 20px;
    }

    .p-b-5 {
        padding-bottom: 5px !important;
    }

    .m-b-10 {
        margin-bottom: 10px;
    }

    .m-t-40 {
        margin-top: 20px;
    }

    .user-card-full .social-link li {
        display: inline-block;
    }

    .user-card-full .social-link li a {
        font-size: 20px;
        margin: 0 10px 0 0;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
</style>
