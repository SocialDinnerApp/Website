<script lang="ts">
    // https://gitlab.com/public-e-soa-com/svelte-time-picker
    import TimePicker from "svelte-time-picker";

    var clickedOn = {
        starter: false,
        main: false,
        dessert: false,
    };

    const dateTimePicker = new Date();
    const timepicker_config = {
        bgColor: "#A785B9",
        is24h: true,
        hasButtons: true,
        buttonNow: "Jetzt",
    };

    export let isFormValid: boolean = false;
    export let timeStarter: string = "";
    export let timeMain: string = "";
    export let timeDessert: string = "";

    function validateInput() {
        if (timeStarter === "") {
            isFormValid = false;
            return;
        }
        if (timeMain === "") {
            isFormValid = false;
            return;
        }
        if (timeDessert === "") {
            isFormValid = false;
            return;
        }
        isFormValid = true;
        return;
    }

    function okCallback(event) {
        const date = event.detail as Date;
        const time = `${date.getHours().toString().padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;

        if (clickedOn.starter) {
            timeStarter = time;
            clickedOn.starter = false;
        } else if (clickedOn.main) {
            timeMain = time;
            clickedOn.main = false;
        } else {
            timeDessert = time;
            clickedOn.dessert = false;
        }
        validateInput()
        document.getElementById("closingModal").click();
    }
    function cancelCallback(_) {
        document.getElementById("closingModal").click();
    }
</script>

<div class="d-flex justify-content-center mt-5" id="test2">
    <div class="col-lg-7">
        <div class="card shadow border-primary py-4 px-5">
            <div class="card-body">
                <div class="row gy-5">
                    <h1 class="text-secondary">Uhrzeiten</h1>
                    <div class="container">
                        <div class="mb-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="starterTime"
                                placeholder="Startzeit Vorspeise"
                                bind:value={timeStarter}
                                data-bs-toggle="modal"
                                data-bs-target="#timeModal"
                                on:click={() => (clickedOn.starter = true)}
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="mainTime"
                                placeholder="Startzeit Hauptspeise"
                                bind:value={timeMain}
                                data-bs-toggle="modal"
                                data-bs-target="#timeModal"
                                on:click={() => (clickedOn.main = true)}
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="text"
                                class="form-control border border-secondary"
                                id="dessertTime"
                                placeholder="Startzeit Nachspeise"
                                bind:value={timeDessert}
                                data-bs-toggle="modal"
                                data-bs-target="#timeModal"
                                on:click={() => (clickedOn.dessert = true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div
    class="modal fade"
    id="timeModal"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="width: 306px">
            <TimePicker
                options={timepicker_config}
                on:ok={okCallback}
                on:cancel={cancelCallback}
            />
            <div data-bs-dismiss="modal" id="closingModal" />
        </div>
    </div>
</div>
