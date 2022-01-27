<script>
    import {push} from 'svelte-spa-router'
    import { fade } from "svelte/transition"
</script>

<div
    class="row justify-content-center align-items-center"
    style="padding: 30px 0;"
>
    <div class="col-lg-5" in:fade="{{ delay: 200, duration: 1000 }}" out:fade="{{ delay: 0, duration: 0}}">
        <div class="d-flex justify-content-center w-50">
            <img
                src="images/landingpage_2.png"
                alt="Have fun"
                class="img-fluid"
            />
        </div>
    </div>
    <div class="col-lg-5 text-left" in:fade="{{ delay: 200, duration: 1000 }}" out:fade="{{ delay: 0, duration: 0}}">
        <h3 class="text-secondary">Erstelle dein Event als Fachschaft oder Studenteninitiative.</h3>
        <p class="text-light">
            Einfach mit wenigen Klicks ein Event für eure Studenten erstellen.
        </p>
        <div class="d-flex justify-content-left" style="margin-top: 20px;">
            <button type="button" class="btn btn-primary" on:click={() => push('/signin')}> Event erstellen </button>
        </div>
    </div>
</div>

<style>
    .ctm-btn {
        background-color: #492774;
        color: white;
        padding: 7px 20px;
    }
</style>