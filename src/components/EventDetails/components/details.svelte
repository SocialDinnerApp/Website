<script lang="ts">
    import { pop } from "svelte-spa-router";
</script>
<div
    class="row g-5 justify-content-left mx-5 mt-0 mb-5 px-3 pb-5 border border-top-0 border-secondary shadow"
>
    <div class="d-flex border-light border-bottom border-1 justify-content-between">
        <h1 class="text-primary">Dinner Hochschule BW MA</h1>
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
                Hi! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor.
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
                    <p>17:00 Uhr</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Hauptspeise:</p>
                </div>
                <div class="col-auto">
                    <p>18:30 Uhr</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Nachspeise:</p>
                </div>
                <div class="col-auto">
                    <p>20:00 Uhr</p>
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
                    <p>Mannheim</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Datum:</p>
                </div>
                <div class="col-auto">
                    <p>31.12.2022</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Teilnahmegebühr:</p>
                </div>
                <div class="col-auto">
                    <p>6€</p>
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
                    <p>150</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Anmeldeschluss:</p>
                </div>
                <div class="col-auto">
                    <p>14.12.2022 17:00</p>
                </div>
            </div>
            <div class="row justify-content-left">
                <div class="col-auto">
                    <p>Freigegebene Domains:</p>
                </div>
                <div class="col-auto">
                    <p>@student.dhbw-mannheim.de</p>
                </div>
            </div>
        </div>
    </div>
</div>