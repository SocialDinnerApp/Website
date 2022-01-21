<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Item from "./components/Item.svelte";
    import { push } from "svelte-spa-router";
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition"

    var searchpattern: string = "";
    var isOldEvents: boolean = false;

    let info = [
        {
            id: 1,
            name: "Dinner Uni Heidelberg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
            ort: "Mannheim",
            zeit: "31.12.2021",
            kosten: 7,
            image: "dhbw.jpg",
        },
        {
            id: 2,
            name: "Dinner Frankfurt Studies",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
            ort: "Mannheim",
            zeit: "31.12.2021",
            kosten: 7,
            image: "dhbw.jpg",
        },
        {
            id: 3,
            name: "Dinner Hochschule BW MA",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
            ort: "Mannheim",
            zeit: "31.12.2021",
            kosten: 7,
            image: "dhbw.jpg",
        },
    ];

    function onClickTile() {
        push("#/myevents/123");
    }
</script>

<NavigationBar route="/myevents" />

<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <div class="d-flex">
            <h1 class="text-primary">Meine Events</h1>
            <p
                class="text-secondary"
                style="margin-top: auto; margin-left: auto"
            >
                Ergebnisse: 5
            </p>
        </div>
    </div>
    <div class="container my-5">
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
                checked={isOldEvents}
                style="width: 40px; height: 20px;"
            />
            <label class="form-check-label ms-2" for="flexSwitchCheckChecked"
                >Vergangene Events</label
            >
        </div>
    </div>
    {#each info as i (i.id)}
        {#if i.name.toLowerCase().includes(searchpattern.toLowerCase())}
            <div on:click={onClickTile} in:fade="{{ delay: 0, duration: 500 }}" out:fade="{{ delay: 0, duration: 0 }}">
                <Item item={i}/>
            </div>
        {/if}
    {/each}
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
