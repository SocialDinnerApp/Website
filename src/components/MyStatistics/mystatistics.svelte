<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Chart from "svelte-frappe-charts";
    import {onMount} from "svelte"
    import {StatService} from "../../services/Stats"


    var monthlyRev: number;
    var lastSeven: Array<any>;
    var bardata: any;

    onMount(async () => {
        // ToBe exchanged
        const monthlyRev_res = await StatService.getMonthlyRev();
        if (monthlyRev_res) {
            monthlyRev = monthlyRev_res['data'][0]['revenue']
        }

        lastSeven = await StatService.getLastSeven();

        var bar_dates = lastSeven['data'].map((event) => event["name"]);
        var bar_values = lastSeven['data'].map((event) => event["value"]);

        bardata = {
            labels: bar_dates,
            datasets: [
                {
                    values: bar_values,
                },
            ],
        };
    });

    let colors = ["#492774"];
    // let data = {
    //     labels: ["20.01.22", "20.02.22", "20.03.22", "20.04.22", "20.05.22", "20.06.22", "20.07.22"],
    //     datasets: [
    //         {
    //             values: [10, 12, 3, 9, 8, 15, 9],
    //         },
    //     ],
    // };

    // let linedata = {
    //     labels: ["KW21", "KW22", "KW23", "KW24", "KW25", "KW26", "KW27"],
    //     datasets: [
    //         {
    //             values: [10, 12, 13, 19, 28, 35, 49],
    //             name: "Teilnehmer",
    //         },
    //         {
    //             values: [20, 24, 26, 38, 56, 70, 98],
    //             name: "Einnahmen",
    //         },
    //     ],
    // };

    // let donutdata = {
    //     labels: ["Standard", "Vegetarier", "Veganer"],
    //     datasets: [
    //         {
    //             values: [80, 15, 5],
    //         },
    //     ],
    // };

    // let colors = ["#492774"];

    // let barOptions = {
    //     spaceRatio: 0.2,
    // };

    // let chartRef;
    // const onExport = () => chartRef.exportChart();
</script>

<NavigationBar />
<div
    class="row g-5 justify-content-evenly mx-5 my-5 px-3 pb-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <h1 class="text-primary">Eventübergreifende Insights</h1>
    </div>
    <div>
        <h3 class="text-secondary">Umsatz in diesem Monat</h3>
        <div class="d-flex">
            <h1 class="text-primary m-5 p-5 border border-primary rounded">
                {monthlyRev} €
            </h1>
        </div>
    </div>
    {#if lastSeven}
        <div>
            <h3 class="text-secondary">Teilnehmer der letzten 7 Events</h3>
            <Chart
                data={bardata}
                {colors}
                isNavigable=""
                valuesOverPoints="1"
                height="500"
                type="bar"
            />
        </div>
    {/if}
    <!-- {#await getPartHist() then partHist}
        {#each partHist as event}
            <div class="my-5">
                <h3 class="text-secondary">
                    Kumulierte Anzahl der Teilnehmer für Event: {event[
                        "eventName"
                    ]}
                </h3>
                <div>
                    <Chart
                        data={{
                            labels: event["dates"],
                            datasets: [
                                {
                                    values: event["values"],
                                    name: event["eventName"],
                                },
                            ],
                        }}
                        {colors}
                        valuesOverPoints="1"
                        height="500"
                        type="line"
                    />
                </div>
            </div>
        {/each}
    {/await} -->
</div>
