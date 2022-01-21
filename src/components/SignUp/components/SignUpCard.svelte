<script lang="ts">
    import { push } from "svelte-spa-router";
    import { UserService } from "../../../services/User";

    var signupSucceeded = true;
    var username: string = "";
    var email: string = "";
    var password: string = "";
    var faculty: string = "";
    var city: string = "";
    var university: string = "";

    async function onSignup() {
        const result = await UserService.signup(
            username,
            email,
            faculty,
            city,
            university,
            password
        );
        console.log(result);
        if (result) {
            push("#/signin");
        } else {
            signupSucceeded = false;
        }
    }
</script>

<div class="card shadow text-left border-primary" style="border-radius: 2%">
    <div class="card-body">
        <form class="p-4" on:submit|preventDefault={onSignup}>
            <div class="text-center">
                <h3 class="mb-5 text-secondary">Registrierung</h3>
            </div>
            <div class="mb-3">
                <label for="userName" class="text-light">Username</label>
                <input
                    type="text"
                    class="ctm-form-control"
                    id="userName"
                    bind:value={username}
                />
            </div>
            <div class="mb-3">
                <label for="emailAddress" class="text-light"
                    >Email-Adresse</label
                >
                <input
                    type="email"
                    class="ctm-form-control"
                    id="emailAddress"
                    bind:value={email}
                />
            </div>
            <!-- new -->
            <div class="mb-3">
                <label for="university" class="text-light">Universität</label>
                <input
                    type="text"
                    class="ctm-form-control"
                    id="university"
                    bind:value={university}
                />
            </div>
            <div class="mb-3">
                <label for="city" class="text-light">Stadt</label>
                <input
                    type="text"
                    class="ctm-form-control"
                    id="city"
                    bind:value={city}
                />
            </div>
            <div class="mb-3">
                <label for="faculty" class="text-light">Fakultät</label>
                <input
                    type="text"
                    class="ctm-form-control"
                    id="faculty"
                    bind:value={faculty}
                />
            </div>
            <!-- new -->
            <div class="mb-5">
                <label for="password" class="text-light">Passwort</label>
                <input
                    type="password"
                    class="ctm-form-control"
                    id="password"
                    bind:value={password}
                />
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary"
                    >REGISTRIEREN</button
                >
                {#if !signupSucceeded}
                    <p class="text-danger mt-4">
                        Registrierung fehlgeschlagen!
                    </p>
                {/if}
            </div>
        </form>
    </div>
</div>
