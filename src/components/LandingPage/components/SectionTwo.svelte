<script>
    import {push} from 'svelte-spa-router'
</script>

<div
    class="row justify-content-center align-items-center"
    style="padding: 30px 0;"
>
    <div class="col-lg-5">
        <div class="d-flex justify-content-center w-50">
            <img
                src="images/landingpage_2.png"
                alt="Have fun"
                class="img-fluid"
            />
        </div>
    </div>
    <div class="col-lg-5">
        <h3>Erstelle dein Event als Universität.</h3>
        <p style="color: #7A7A7A">
            Einfach mit wenigen Klicken ein Event für eure Studenten erstellen.
        </p>
        <div class="d-flex justify-content-center" style="margin-top: 50px;">
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