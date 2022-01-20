<script lang="ts">
    import { DateInput } from "date-picker-svelte";
    let date = new Date()
    let minDate = new Date(`${date.getFullYear()}-01-01 00:00:00`)
    let maxDate = new Date(`${date.getFullYear() + 2}-01-01 00:00:00`)

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
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="eventLocation"
                                placeholder="Eventstadt"
                            />
                        </div>
                        <!-- <div class="my-4">
                            <input
                                type="text"
                                class="ctm-form-control"
                                id="eventDate"
                                placeholder="Eventdatum"
                            />
                        </div> -->
                        <div class="my-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="eventFee"
                                placeholder="Teilnahmegebühr"
                            />
                        </div>
                        <div class="mx-1">
                            <p class="text-secondary">Eventdatum</p>
                            <DateInput bind:value={date} format="dd.MM.yyyy" min={minDate} max={maxDate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
