<script>
    import {push} from 'svelte-spa-router'
</script>

<div class="card shadow text-left border-primary" style="border-radius: 2%">
    <div class="card-body">
        <form class="p-4">
            <div class="text-center">
                <h3 class="mb-5 text-primary">Anmeldung</h3>
            </div>
            <div class="mb-3">
                <label for="userName" class="form-label">Username</label>
                <input type="text" class="form-control" id="userName" />
            </div>
            <div class="mb-5">
                <label for="password" class="form-label">Passwort</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary" on:click={() => push('#/myevents')}>ANMELDEN</button>
            </div>
        </form>
    </div>
</div>

<style>
</style>