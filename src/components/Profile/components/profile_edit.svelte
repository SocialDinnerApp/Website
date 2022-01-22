<script lang="ts">
    import { pop } from "svelte-spa-router";
    import { info } from "./info";
    import ProfilePictureCard from "./profile_picture_card.svelte";
    console.log(info[0]);
    const i = info[0];
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
                    <ProfilePictureCard />
                </div>
            </div>
            <div class="row " style="max-width: 1500px;">
                
                <div class=" col-lg-12 d-flex justify-content-center ">
                <div class="col-lg-10" style="max-width: 1500px;">
                    <div class="card user-card-full " style="max-width: 1500px;">
                        <div class="card-body p-4" style="pointer-events: center; max-width: 1500px;">
                            <div class="d-flex justify-content-center" style="max-width: 1500px;">



                                <div class="col-md-12 d-flex justify-content-center" style="max-width: 1000px;">
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
                                                    value={i.Username}
                                                />
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="m-b-10 f-w-600">
                                                    Passwort
                                                </p>

                                                <input
                                                    type="text-muted"
                                                    class="form-control"
                                                    value={i.password}
                                                />
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="m-b-10 f-w-600">
                                                    Email
                                                </p>

                                                <input
                                                    type="text-muted"
                                                    class="form-control"
                                                    value={i.Email}
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
                                                    value={i.Universität}
                                                />
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="m-b-10 f-w-600">
                                                    Stadt
                                                </p>

                                                <input
                                                    type="text-muted"
                                                    class="form-control"
                                                    value={i.City}
                                                />
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="m-b-10 f-w-600">
                                                    Einrichtung
                                                </p>

                                                <input
                                                    type="text-muted"
                                                    class="form-control"
                                                    value={i.faculty}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                          

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 d-flex justify-content-center">
                <button
                    on:click={() => pop()}
                    type="button"
                    class="btn btn-primary py-2 px-3 "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModa"
                >
                    Speichern
                </button>
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
        -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
        border: none;
        margin-bottom: 30px;
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
