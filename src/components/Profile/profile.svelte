<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import ProfilePictureCard from "./components/profile_picture_card.svelte";
    import DataCard from "./components/data_card.svelte";
    import { info } from "./components/info";
    import { push } from "svelte-spa-router";

    function onClickTile() {
        push("#/profile/edit");
        // console.log('Ja')
    }
</script>

<NavigationBar route="/profile" />

<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <h1 class="text-primary">Profile</h1>
    </div>
    <div class="container">
        <div class="main-body">
            <div class="row">
                <div
                    class="d-flex justify-content-center "
                    style="margin-top: 20px;"
                >
                    <ProfilePictureCard />
                </div>
            </div>

            <div class="row gutters-sm">
                <div class="col-md-1 " />

                <div class="col-md-10 ">
                    <div class="align-items-center">
                        <div class="card mb-3 " style="max-width: 900px;">
                            {#each info as info (info.id)}
                                <DataCard {info} />
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="col-md-1 " />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 d-flex justify-content-center">
                <button
                    on:click={onClickTile}
                    type="button"
                    class="btn btn-primary py-2 px-3 "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModa"
                >
                    Ändern
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        margin-top: 40px;
    }
</style>
