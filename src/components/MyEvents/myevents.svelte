<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Item from "./components/Item.svelte";
    import { push, replace } from "svelte-spa-router";
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import { EventService } from "../../services/Event";

    var searchpattern: string = "";
    var isOldEvents: boolean = false;
    let events: Array<any> = [];

    onMount(async () => {
        const response = await EventService.getAll();
        // console.log(response);
        if (response) {
            events = response as Array<any>;
        }
    });

    function onClickTile(eventid) {
        push(`#/myevents/${eventid}`);
    }

    function getDateFromString(datestring: string) {
        let day = datestring.split(".")[0];
        let month = datestring.split(".")[1];
        let year = datestring.split(".")[2];
        let date = new Date(`${year}-${month}-${day}`);
        return date
    }

    $: checkFilter = (event) => {

        if (!isOldEvents) {
            const eventdate = getDateFromString(event.date)
            const now = new Date()
            if (now > eventdate) {
                // console.log(`Old event: ${event.name}`)
                return false
            }
        }
        let stringMatch = event.name.toLowerCase().includes(searchpattern.toLowerCase());
        return stringMatch
    };
</script>

<NavigationBar route="/myevents" />

<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <div class="d-flex">
            <h1 class="text-primary">Meine Events</h1>
            <!-- <p
                class="text-secondary"
                style="margin-top: auto; margin-left: auto"
            >
                Ergebnisse: 5
            </p> -->
        </div>
    </div>
    <div class="container my-5 border-bottom pb-5">
        <div
            class="row border border-secondary me-5 py-2 shadow"
            style="border-radius: 50px;"
        >
            <div class="col-11">
                <input
                    type="text"
                    class="search-form-control ms-3"
                    id="search"
                    placeholder="Suche..."
                    bind:value={searchpattern}
                />
            </div>
            <div class="col-1 justify-content-center">
                <Icon icon="bi:search" color="A785B9" width="30px" />
            </div>
        </div>
        <div class="form-check form-switch mt-4 mx-3">
            <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                on:click={() => isOldEvents = !isOldEvents} 
                style="width: 40px; height: 20px;"
            />
            <label class="form-check-label ms-2" for="flexSwitchCheckChecked"
                >Vergangene Events</label
            >
        </div>
    </div>
    {#each events as event}
        {#if checkFilter(event)}
            <div
                on:click={() => onClickTile(event._id)}
                in:fade={{ delay: 0, duration: 500 }}
                out:fade={{ delay: 0, duration: 0 }}
            >
                <Item item={event} />
            </div>
        {/if}
    {/each}
    <!-- {#each info as i (i.id)}
        {#if i.name.toLowerCase().includes(searchpattern.toLowerCase())}
            <div on:click={onClickTile} in:fade="{{ delay: 0, duration: 500 }}" out:fade="{{ delay: 0, duration: 0 }}">
                <Item item={i}/>
            </div>
        {/if}
    {/each} -->
</div>

<style>
    .search-form-control {
        display: block;
        width: 100%;
        padding: 0.3rem 0.2rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: none;
        border-bottom: none;
        appearance: none;
        outline: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
</style>
