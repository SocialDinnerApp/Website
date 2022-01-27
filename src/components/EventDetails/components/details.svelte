<script lang="ts">
    import { pop } from "svelte-spa-router";

    // Eventvariables
    export let city: string
    export let date: string
    export let description: string
    export let fee: number
    export let maxpart: number
    export let name: string
    export let regdeadline: string
    export let timedessert: string
    export let timemain: string
    export let timestarter: string
</script>
<div
    class="row g-5 justify-content-left mx-5 mt-0 mb-5 px-3 pb-5 border border-top-0 border-secondary shadow"
>
    <div class="d-flex border-light border-bottom border-1 justify-content-between">
        <h1 class="text-primary">{name}</h1>
        <p class="text-secondary" on:click={() => pop()}>zurück</p>
    </div>
    <div class="row px-5 g-4">
        <div>
            <div class="text-left border-light border-bottom border-1 mb-3">
                <h5 class="text-light">Bild</h5>
            </div>
            <div class="d-flex justify-content-left">
                <img
                    src="images/uni_heidelberg.png"
                    alt="Have fun"
                    class="img-fluid"
                />
            </div>
        </div>

        <div>
            <div class="text-left border-light border-bottom border-1 mb-3">
                <h5 class="text-light">Beschreibung</h5>
            </div>
            <p>
                {description}
            </p>
        </div>
        <div>
            <div class="text-left border-light border-bottom border-1 mb-3">
                <h5 class="text-light">Startzeiten</h5>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Vorspeise:</p>
                </div>
                <div class="col-auto">
                    <p>{timestarter} Uhr</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Hauptspeise:</p>
                </div>
                <div class="col-auto">
                    <p>{timemain} Uhr</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Nachspeise:</p>
                </div>
                <div class="col-auto">
                    <p>{timedessert} Uhr</p>
                </div>
            </div>
        </div>

        <div>
            <div class="text-left border-light border-bottom border-1 mb-3">
                <h5 class="text-light">Sichtbare Angaben</h5>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Ort:</p>
                </div>
                <div class="col-auto">
                    <p>{city}</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Datum:</p>
                </div>
                <div class="col-auto">
                    <p>{date}</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Teilnahmegebühr:</p>
                </div>
                <div class="col-auto">
                    <p>{fee}€</p>
                </div>
            </div>
        </div>

        <div>
            <div class="text-left border-light border-bottom border-1 mb-3">
                <h5 class="text-light">Verborgene Angaben</h5>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Maximale Teilnehmeranzahl:</p>
                </div>
                <div class="col-auto">
                    <p>{maxpart}</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Anmeldeschluss:</p>
                </div>
                <div class="col-auto">
                    <p>{regdeadline}</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Freigegebene Domains:</p>
                </div>
                <div class="col-auto">
                    <p>alle</p>
                </div>
            </div>
        </div>
    </div>
</div>