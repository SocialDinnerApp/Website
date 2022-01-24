<script lang="ts">
    import {push} from 'svelte-spa-router'
    import { user } from "../../../store"
    import { UserService } from "../../../services/User"

    var email: string = "";
    var password: string = "";

    var loginSucceeded = true

    async function onSignin() {
        const result = await UserService.signin(email, password)
        console.log(result)

        if (result) {
            var userCred = {
                username: result['data']["organizerId"],
                token: result['data']["jwt"],
            };
            user.set(userCred);
            localStorage.setItem("userCred", JSON.stringify(userCred))
            // console.log(localStorage.getItem("userCred"))
            push("#/mystatistics")
        }
        else {
            loginSucceeded = false
        }
    }

</script>

<div class="card shadow text-left border-primary" style="border-radius: 2%">
    <div class="card-body">
        <form class="p-4" on:submit|preventDefault={onSignin}>
            <div class="text-center">
                <h3 class="mb-5 text-secondary">Anmeldung</h3>
            </div>
            <div class="mb-3">
                <label for="email" class="text-light">Email</label>
                <input type="email" class="ctm-form-control" id="email" bind:value={email}/>
            </div>
            <div class="mb-5">
                <label for="password" class="text-light">Passwort</label>
                <input type="password" class="ctm-form-control" id="password" bind:value={password}/>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">ANMELDEN</button>
                {#if !loginSucceeded}
                    <p class="text-danger mt-4">
                        Email oder Passwort ist falsch!
                    </p>
                {/if}
            </div>
        </form>
    </div>
</div>

<style>
</style>