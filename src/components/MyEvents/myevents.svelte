<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Item from "./components/Item.svelte";
    import { push } from "svelte-spa-router";

    let info = [
        {
            id: 1,
            name: "Dinner Hochschule BW MA",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
            ort: "Mannheim",
            zeit: "31.12.2021",
            kosten: 7,
            image: "dhbw.jpg",
        },
        {
            id: 2,
            name: "Dinner Hochschule BW MA",
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
        push('#/myevents/123');
    }
</script>

<NavigationBar route="/myevents" />

<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <h1 class="text-primary">Meine Events</h1>
    </div>
    {#each info as i (i.id)}
        <div on:click={onClickTile}>
            <Item item={i} />
        </div>
    {/each}
</div>
