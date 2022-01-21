<script lang="ts">
    import { DateInput } from "date-picker-svelte";
    export let regdeadline = new Date();
    let minDate = new Date(`${regdeadline.getFullYear()}-01-01 00:00:00`);
    let maxDate = new Date(`${regdeadline.getFullYear() + 2}-01-01 00:00:00`);

    export let isFormValid: boolean = false;
    export let maxpart: number = undefined;
    export let availdomains: string = "";

    function validateInput() {
        if (availdomains === "") {
            isFormValid = false;
            return;
        }
        if (maxpart === undefined) {
            isFormValid = false;
            return;
        }
        isFormValid = true;
        return;
    }
</script>

<div class="d-flex justify-content-center mt-5">
    <div class="col-lg-7">
        <div class="card shadow border-primary py-4 px-5">
            <div class="card-body">
                <div class="row gy-5">
                    <h1 class="text-secondary">Verborgene Angaben</h1>
                    <div class="container">
                        <div class="my-4">
                            <input
                                type="number"
                                class="form-control border border-primary"
                                id="maxParticipants"
                                placeholder="Maximale Teilnehmerzahl"
                                bind:value={maxpart}
                                on:input={validateInput}
                            />
                        </div>

                        <div class="my-4">
                            <input
                                type="text"
                                class="form-control border border-primary"
                                id="approvedDomains"
                                placeholder="Freigegebene Domains"
                                bind:value={availdomains}
                                on:input={validateInput}
                            />
                        </div>
                        <div class="mx-1">
                            <p class="text-secondary">
                                Datum der Registrierungsdeadline
                            </p>
                            <DateInput
                                bind:value={regdeadline}
                                format="dd.MM.yyyy"
                                min={minDate}
                                max={maxDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
