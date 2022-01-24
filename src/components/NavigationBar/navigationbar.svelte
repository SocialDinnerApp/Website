<script lang="ts">
    export let route = "/mystatistics";

    function onSignout() {
        localStorage.removeItem('userCred');
    }
</script>

<nav
    class="navbar navbar-expand-lg navbar-light border-bottom"
    style="background-color: white;"
>
    <div class="container-fluid">
        <a class="navbar-brand text-secondary" href="#">Social Dinner</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
        >
            <div class="navbar-nav">
                <a class="nav-link {route == "/mystatistics" ? "text-primary": "text-light"}" href="#/mystatistics">Statistiken</a>
            </div>
            <div class="navbar-nav">
                <a class="nav-link {route == "/myevents" ? "text-primary": "text-light"}" href="#/myevents">Meine Events</a
                >
            </div>
            <div class="navbar-nav">
                <a class="nav-link {route == "/newevent" ? "text-primary": "text-light"}" href="#/newevent">Neues Event</a>
            </div>
            <div class="navbar-nav">
                <a class="nav-link {route == "/profile" ? "text-primary": "text-light"}" href="#/profile">Profile</a>
            </div>
            <div class="navbar-nav">
                <a class="nav-link text-light" href="#/" on:click={onSignout}>Abmelden</a>
            </div>
        </div>
    </div>
</nav>
