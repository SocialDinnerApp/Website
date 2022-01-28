<script lang="ts">
    import { UserService } from "../../../services/User";
    import { onMount } from "svelte";

    var username: string = "";
    var email: string = "";
    //var password: string = undefined;
    var faculty: string = "";
    var city: string = "";
    var university: string = "";
    let user: Array<any> = [];


    // get the information about the user
    onMount(async () => {
        const response = await UserService.getuser();
        // console.log(response);
        if (response) {
            user = response[0] as Array<any>;
            //console.log(user);

            username = user["username"],
            email = user["email"],
            faculty = user["faculty"],
            city = user["city"],
            university = user["university"];
           // password = user["password"];

            //console.log(user["username"]);
        } else {
            // console.log("Geht nicht");
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
                            <h6
                                class="text-muted f-w-400"
                                id="password"
                                type="password"
                            >
                                ********
                            </h6>
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
    .card {
        border-radius: 5px;

        border: none;
    }

    .card-block {
        padding: 1.25rem;
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
</style>
