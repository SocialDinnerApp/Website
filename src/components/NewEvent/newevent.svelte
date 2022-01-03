<script>
    import NavigationBar from "./components/NavigationBar.svelte";
</script>

<NavigationBar />
<div class="row g-5 justify-content-center" style="padding: 30px 70px;">
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
                    class="card text-center border-primary rounded"
                    style="width: 25rem; height: 10rem;"
                >
                    <div
                        class="card-body align-items-center d-flex justify-content-center"
                    >
                        <p>Laden Sie hier ein Bild hoch</p>
                    </div>
                </div>
                <!-- <div class="d-flex justify-content-left mt-3">
                    <button type="button" class="btn btn-primary">
                        Datei auswählen
                    </button>
                </div> -->

                <div class="d-flex justify-content-left mt-3">
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </div>
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Beschreibung</h5>
            </div>
            <div class="mb-4">
                <textarea class="form-control" rows="5" />
            </div>
            <div class="text-left border-light border-bottom border-1">
                <h5 class="text-light">Verborgene Angaben</h5>
            </div>
            <div class="container">
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2"
                        id="maxParticipants"
                        placeholder="Maximale Teilnehmerzahl"
                    />
                </div>
                <div class="d-flex my-3">
                    <input
                        type="text"
                        class="form-control me-5 p-2"
                        id="dateRegDeadl"
                        placeholder="Datum der Registrierungsdeadline"
                    />

                    <input
                        type="text"
                        class="form-control p-2"
                        id="timeRegDeadl"
                        placeholder="Uhrzeit der Registrierungsdeadline"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2"
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
                        class="form-control p-2"
                        id="eventName"
                        placeholder="Eventname"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2"
                        id="eventLocation"
                        placeholder="Eventstadt"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2"
                        id="eventDate"
                        placeholder="Eventdatum"
                    />
                </div>
                <div class="mt-3">
                    <input
                        type="text"
                        class="form-control p-2"
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
                        class="form-control p-2"
                        id="starterTime"
                        placeholder="Startzeit Vorspeise"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2"
                        id="mainTime"
                        placeholder="Startzeit Hauptspeise"
                    />
                </div>
                <div class="my-3">
                    <input
                        type="text"
                        class="form-control p-2"
                        id="dessertTime"
                        placeholder="Startzeit Nachspeise"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
        <button type="button" class="btn btn-primary py-2 px-3">
            Event erstellen
        </button>
    </div>
</div>
