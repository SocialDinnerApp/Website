<script>
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Confirmation from "./components/Confirmation.svelte";
</script>

<NavigationBar route="/newevent"/>
<div
    class="row g-5 justify-content-evenly mx-5 my-5 px-3 pb-5 border border-secondary rounded shadow"
>
    <div class="text-left border-light border-bottom border-1">
        <h1 class="text-primary">Event erstellen</h1>
    </div>
    <div class="col-lg-5">
        <div class="row gy-3">
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Bild des Events</h5>
            </div>
            <div class="mb-4">
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
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Beschreibung</h5>
            </div>
            <div class="mb-4">
                <textarea class="form-control border-secondary" rows="5" />
            </div>
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Verborgene Angaben</h5>
            </div>
            <div class="container">
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="maxParticipants"
                        placeholder="Maximale Teilnehmerzahl"
                    />
                </div>
                <div class="row justify-content-left">
                    <div class="col-sm-6">
                        <input
                            type="text"
                            class="form-control me-5 p-2 border-secondary"
                            id="dateRegDeadl"
                            placeholder="Datum der Registrierungsdeadline"
                        />
                    </div>
                    <div class="col-sm-6">
                        <input
                            type="text"
                            class="form-control p-2 border-secondary"
                            id="timeRegDeadl"
                            placeholder="Uhrzeit der Registrierungsdeadline"
                        />
                    </div>
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="approvedDomains"
                        placeholder="Freigegebene Domains"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-5">
        <div class="row gy-5">
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Sichtbare Angaben</h5>
            </div>
            <div class="container">
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="eventName"
                        placeholder="Eventname"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="eventLocation"
                        placeholder="Eventstadt"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="eventDate"
                        placeholder="Eventdatum"
                    />
                </div>
                <div class="mt-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="eventFee"
                        placeholder="Teilnahmegebühr"
                    />
                </div>
            </div>
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Uhrzeiten</h5>
            </div>
            <div class="container">
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="starterTime"
                        placeholder="Startzeit Vorspeise"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="mainTime"
                        placeholder="Startzeit Hauptspeise"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2 border-secondary"
                        id="dessertTime"
                        placeholder="Startzeit Nachspeise"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
        <button
            type="button"
            class="btn btn-primary py-2 px-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Event erstellen
        </button>
    </div>
</div>

<!-- Modal -->
<Confirmation/>

