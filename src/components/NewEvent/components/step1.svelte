<script lang="ts">
    import { DateInput } from "date-picker-svelte";
    export let eventdate = new Date();
    let minDate = new Date(`${eventdate.getFullYear()}-01-01 00:00:00`);
    let maxDate = new Date(`${eventdate.getFullYear() + 2}-01-01 00:00:00`);

    export let isFormValid: boolean = false;

    export let eventname: string = "";
    export let eventloc: string = "";
    export let eventzipcode: number = null;
    export let partfee: number = null;

    function validateInput() {
        if (eventname === "") {
            isFormValid = false;
            return;
        }
        if (eventloc === "") {
            isFormValid = false;
            return;
        }
        if (eventzipcode === null) {
            isFormValid = false;
            return;
        }
        if (partfee === null) {
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
                    <h1 class="text-secondary">Sichtbare Angaben</h1>
                    <div class="container">
                        <div class="mb-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="eventName"
                                placeholder="Eventname"
                                bind:value={eventname}
                                on:input={validateInput}
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="eventLocation"
                                placeholder="Eventstadt"
                                bind:value={eventloc}
                                on:input={validateInput}
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="number"
                                class="form-control border border-secondary"
                                id="eventZipcode"
                                placeholder="Event Postleitzahl"
                                bind:value={eventzipcode}
                                on:input={validateInput}
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="number"
                                class="form-control border border-secondary"
                                id="eventFee"
                                placeholder="Teilnahmegebühr"
                                bind:value={partfee}
                                on:input={validateInput}
                            />
                        </div>
                        <div class="mx-1">
                            <p class="text-secondary">Eventdatum</p>
                            <DateInput
                                bind:value={eventdate}
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
