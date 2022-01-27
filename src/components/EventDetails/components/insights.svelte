<script lang="ts">
    import Chart from "svelte-frappe-charts";
    import { StatService } from "../../../services/Stats";

    export let name: string;
    export let eventId: string;

    let colors = ["#492774"];
</script>

<div
    class="row g-5 justify-content-left mx-5 mt-0 mb-5 px-3 pb-5 border border-top-0 border-secondary shadow"
>
    <div class="border-light border-bottom border-1">
        <h1 class="text-primary">{name}</h1>
    </div>
    {#await StatService.getPartsForSingleEvent(eventId) then partHist}
        <div>
            <h3 class="text-secondary">Anmeldungen in den letzten 30 Tagen</h3>
            <Chart
                data={{
                    labels: partHist["dates"],
                    datasets: [
                        {
                            values: partHist["participations"],
                        },
                    ],
                }}
                {colors}
                valuesOverPoints="1"
                height="500"
                type="line"
            />
        </div>
    {/await}
</div>
