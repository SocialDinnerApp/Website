<script lang="ts">
    import { pop } from "svelte-spa-router";
    import ProfilePictureCard from "./profile_picture_card.svelte";
    import { UserService } from "../../../services/User";
    import { onMount } from "svelte";
    import { equal } from "./equal";

    var username: string = "";
    var email: string = "";
    var password: string = undefined;
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

           // console.log(user["username"]);
        } else {
            // console.log("Geht nicht");
        }
    });
    //update the user-information
    // console.log(username);
    async function update() {
        const result = await UserService.update(
            username = equal(username, user["username"]),
            email = equal(email, user["email"]),
            faculty = equal(faculty, user["faculty"]),
            city = equal(city, user["city"]),
            university = equal(university, user["university"]),
            password = equal(password, undefined)
        );
        if (result) {
            // console.log(result);
        } else {
            // console.log("Geht nicht");
        }
        pop();
    }
</script>

<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>
    <div
        class="d-flex border-light border-bottom border-1 justify-content-between"
    >
        <h1 class="text-primary">Profile</h1>
        <p class="text-secondary" on:click={() => pop()}>zurück</p>
    </div>

    <div class="container">
        <div class="main-body ">
            <div class="row">
                <div
                    class="d-flex justify-content-center "
                    style="margin-top: 20px;"
                >
                <!-- creating the profile picture -->
                    <ProfilePictureCard />
                </div>
            </div>
            <div class="row " style="max-width: 1500px;">
                <div class=" col-lg-12 d-flex justify-content-center ">
                    <div class="col-lg-10" style="max-width: 1500px;">
                        <div
                            class="card user-card-full "
                            style="max-width: 1500px;"
                        >
                            <div
                                class="card-body p-4"
                                style="pointer-events: center; max-width: 1500px;"
                            >
                                <div
                                    class="d-flex justify-content-center"
                                    style="max-width: 1500px;"
                                >
                                    <div
                                        class="col-md-12 d-flex justify-content-center"
                                        style="max-width: 1000px;"
                                    >
                                    <!-- Information gets shown in a card to the user -->
                                        <div class="card-block">
                                            <h6
                                                class="m-b-20 p-b-5 b-b-default f-w-600"
                                            >
                                                Accountdaten
                                            </h6>
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <p class="m-b-10 f-w-600">
                                                        Username
                                                    </p>
                                                    <input
                                                        type="text-muted"
                                                        class="form-control"
                                                        id="username"
                                                        bind:value={username}
                                                    />
                                                </div>
                                                <div class="col-sm-4">
                                                    <p class="m-b-10 f-w-600">
                                                        Passwort
                                                    </p>

                                                    <input
                                                        type="password"
                                                        class="form-control"
                                                        id="password"
                                                        bind:value={password}
                                                    />
                                                </div>
                                                <div class="col-sm-4">
                                                    <p class="m-b-10 f-w-600">
                                                        Email
                                                    </p>

                                                    <input
                                                        type="text-muted"
                                                        class="form-control"
                                                        bind:value={email}
                                                    />
                                                </div>
                                            </div>
                                            <h6
                                                class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"
                                            >
                                                Information
                                            </h6>
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <p class="m-b-10 f-w-600">
                                                        Universität
                                                    </p>

                                                    <input
                                                        type="text-muted"
                                                        class="form-control"
                                                        bind:value={university}
                                                    />
                                                </div>
                                                <div class="col-sm-4">
                                                    <p class="m-b-10 f-w-600">
                                                        Stadt
                                                    </p>

                                                    <input
                                                        type="text-muted"
                                                        class="form-control"
                                                        bind:value={city}
                                                    />
                                                </div>
                                                <div class="col-sm-4">
                                                    <p class="m-b-10 f-w-600">
                                                        Einrichtung
                                                    </p>

                                                    <input
                                                        type="text-muted"
                                                        class="form-control"
                                                        bind:value={faculty}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 d-flex justify-content-center">
                <button
                    on:click={() => update()}
                    type="buttonupedate"
                    class="btn btn-primary py-2 px-3 "
                >
                    Speichern
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .user-card-full {
        overflow: hidden;
    }

    .card {
        border-radius: 5px;
        -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
        border: none;
        margin-bottom: 30px;
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
