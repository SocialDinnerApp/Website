<script>
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Chart from "svelte-frappe-charts";

    let data = {
        labels: ["20.01.22", "20.02.22", "20.03.22", "20.04.22", "20.05.22", "20.06.22", "20.07.22"],
        datasets: [
            {
                values: [10, 12, 3, 9, 8, 15, 9],
            },
        ],
    };

    let linedata = {
        labels: ["KW21", "KW22", "KW23", "KW24", "KW25", "KW26", "KW27"],
        datasets: [
            {
                values: [10, 12, 13, 19, 28, 35, 49],
                name: "Teilnehmer",
            },
            {
                values: [20, 24, 26, 38, 56, 70, 98],
                name: "Einnahmen",
            },
        ],
    };

    let donutdata = {
        labels: ["Standard", "Vegetarier", "Veganer"],
        datasets: [
            {
                values: [80, 15, 5],
            },
        ],
    };

    let colors = ["#492774"];

    let barOptions = {
        spaceRatio: 0.2,
    };

    let chartRef;
    const onExport = () => chartRef.exportChart();
</script>

<NavigationBar />
<div
    class="row g-5 justify-content-evenly mx-5 my-5 px-3 pb-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <h1 class="text-primary">Eventübergreifende Insights</h1>
    </div>
    <div>
        <h3 class="text-secondary">Teilnehmer der letzten 7 Events</h3>
        <Chart
            {data}
            {colors}
            isNavigable=""
            valuesOverPoints="1"
            height="500"
            type="bar"
        />
    </div>
    <div>
        <h3 class="text-secondary">
            Kommulierte Anzahl der Teilnehmer/Einnahmen
        </h3>
        <Chart
            data={linedata}
            {colors}
            valuesOverPoints="1"
            height="500"
            type="line"
        />
    </div>
    <div>
        <div class="d-flex justify-content-between">
            <h3 class="text-secondary">Essgewohnheiten</h3>
            <p class="text-primary" on:click={onExport}>Export</p>
        </div>
        <Chart
            data={donutdata}
            {colors}
            valuesOverPoints="1"
            maxSlices="10"
            height="500"
            type="donut"
            bind:this={chartRef}
        />
    </div>
</div>
