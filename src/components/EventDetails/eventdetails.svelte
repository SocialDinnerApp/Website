<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Details from "./components/details.svelte";
    import Insights from "./components/insights.svelte";
    import { onMount } from "svelte";
    import { EventService } from "../../services/Event";

    var isInformation = true;

    export let params = {};

    // Eventvariables
    let city: string;
    let date: string;
    let description: string;
    let fee: number;
    let maxpart: number;
    let name: string;
    let regdeadline: string;
    let timedessert: string;
    let timemain: string;
    let timestarter: string;
    let eventId: string = params['eventId']

    onMount(runOnMount);

    async function runOnMount() {
        const result = await EventService.getSingle(eventId);
        if (result) {
            city = result.data.value.city;
            date = result.data.value.date;
            description = result.data.value.description;
            fee = result.data.value.fee;
            maxpart = result.data.value.max_participants;
            name = result.data.value.name;
            regdeadline = result.data.value.registration_deadline;
            timedessert = result.data.value.time_dessert;
            timemain = result.data.value.time_main;
            timestarter = result.data.value.time_starter;
        }
    }
</script>

<!-- <p>{params.eventId}</p> -->
<NavigationBar route="/myevents" />
<ul class="nav nav-tabs mx-5 mt-5">
    <li class="nav-item">
        <h5
            class="nav-link {isInformation ? 'active' : ''}"
            on:click={() => (isInformation = true)}
        >
            Details
        </h5>
    </li>
    <li class="nav-item">
        <h5
            class="nav-link {isInformation ? '' : 'active'}"
            on:click={() => (isInformation = false)}
        >
            Insights
        </h5>
    </li>
</ul>
{#if isInformation}
    <Details
        {city}
        {date}
        {description}
        {fee}
        {maxpart}
        {name}
        {regdeadline}
        {timedessert}
        {timemain}
        {timestarter}
    />
{:else}
    <Insights {name} {eventId}/>
{/if}
