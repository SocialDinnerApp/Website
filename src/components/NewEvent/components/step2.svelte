<script lang="ts">
    export let isFormValid: boolean = false;

    export let eventdesc: string = "";

    function validateInput() {
        if (eventdesc === "") {
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
                    <h1 class="text-secondary">Beschreibung</h1>
                    <div class="mb-2">
                        <textarea
                            class="form-control border-secondary"
                            rows="5"
                            placeholder="Beschreiben Sie hier ihr Event"
                            bind:value={eventdesc}
                            on:input={validateInput}
                        />
                    </div>
                    <div class="mb-2">
                        <div
                            class="card text-center border-secondary rounded"
                            style="height: 10rem;"
                        >
                            <div
                                class="card-body align-items-center d-flex justify-content-center"
                            >
                                <p>Laden Sie hier ein Bild hoch</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <input
                                class="form-control border-secondary"
                                type="file"
                                id="formFile"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
