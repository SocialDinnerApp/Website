<script>
    import NavigationBar from "./components/NavigationBar.svelte";
    import Details from "./components/details.svelte";
    import Insights from "./components/insights.svelte";

    var isInformation = false;

    export let params = {};
</script>

<!-- <p>{params.eventId}</p> -->
<NavigationBar />
<ul class="nav nav-tabs mx-5 mt-5">
    <li class="nav-item">
        <h5 class="nav-link {isInformation ? "active" : ""}" on:click={() => isInformation = true}>Details</h5>
    </li>
    <li class="nav-item">
        <h5 class="nav-link {isInformation ? "" : "active"}" on:click={() => isInformation = false}>Insights</h5>
    </li>
</ul>
{#if isInformation}
<Details/>
{:else}
<Insights/>
{/if}
