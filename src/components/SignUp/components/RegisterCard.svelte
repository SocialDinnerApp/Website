<div class="card shadow text-left ctm-card" style="border-radius: 2%">
    <div class="card-body">
        <form class="px-4">
            <div class="text-center">
                <h3 class="mb-5" style="color: #492774">Registrierung</h3>
            </div>
            <div class="mb-3">
                <label for="userName" class="form-label">Username</label>
                <input type="text" class="form-control" id="userName" />
            </div>
            <div class="mb-3">
                <label for="emailAddress" class="form-label"
                    >Email-Adresse</label
                >
                <input type="email" class="form-control" id="emailAddress" />
            </div>
            <div class="mb-5">
                <label for="password" class="form-label">Passwort</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="text-center">
                <button type="submit" class="btn ctm-btn">Registrieren</button>
            </div>
        </form>
    </div>
</div>

<style>
    .ctm-btn {
        background-color: #492774;
        color: white;
        padding: 7px 20px;
    }
    .ctm-card {
        border-style: solid;
        border-color: #492774;
    }
</style>