<script lang="ts">
    import { fade } from "svelte/transition"
</script>

<div
    class="row justify-content-center align-items-center"
    style="padding: 30px 0;"
>
    <div class="col-lg-5" in:fade="{{ delay: 0, duration: 1000 }}" out:fade="{{ delay: 0, duration: 0}}">
        <div>
            <h1 class="ctm-h1">Freundschaft geht durch den Magen.</h1>
        </div>
        <div style="margin-top: 15px;">
            <ul class="text-light">
                <li>Flexibel</li>
                <li>Günstig</li>
                <li>Spaß</li>
                <li>Neue Kontakte</li>
            </ul>
        </div>
        <div class="d-flex justify-content-left" style="margin-top: 25px;">
            <button type="button" class="btn btn-primary">
                Downloade die App
            </button>
        </div>
    </div>
    <div class="col-lg-5" in:fade="{{ delay: 0, duration: 1000 }}" out:fade="{{ delay: 0, duration: 0}}">
        <div class="d-flex justify-content-center w-75">
            <img
                src="images/landingpage_1.png"
                alt="Have fun"
                class="img-fluid"
            />
        </div>
    </div>
</div>

<style>
    .ctm-h1 {
        font-family: 'Pushster';
        color: #492774;
    }
</style>