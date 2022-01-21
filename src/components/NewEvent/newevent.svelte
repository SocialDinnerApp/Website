<script lang="ts">
    import NavigationBar from "../NavigationBar/navigationbar.svelte";
    import Confirmation from "./components/Confirmation.svelte";
    import StepOne from "./components/step1.svelte";
    import StepTwo from "./components/step2.svelte";
    import StepThree from "./components/step3.svelte";
    import StepFour from "./components/step4.svelte";
    import { fade } from "svelte/transition";

    var curStep = 1;
    let isFormValid: boolean;
    let isFormOneValid: boolean;
    let isFormTwoValid: boolean;
    let isFormThreeValid: boolean;
    let isFormFourValid: boolean;

    const totalSteps = 4;
    $: progress = (curStep / totalSteps) * 100;

    // FormVariables
    let eventdate: Date;
    let eventname: string;
    let eventloc: string;
    let partfee: number;
    let eventdesc: string;
    let maxpart: number;
    let availdomains: string;
    let regdeadline: Date;
    let timeStarter: string;
    let timeMain: string;
    let timeDessert: string;


    $: if (curStep == 1) {
        isFormValid = isFormOneValid;
    } else if (curStep == 2) {
        isFormValid = isFormOneValid && isFormTwoValid;
    } else if (curStep == 3) {
        isFormValid = isFormOneValid && isFormTwoValid && isFormThreeValid;
    } else if (curStep == 4) {
        isFormValid = (
            isFormOneValid &&
            isFormTwoValid &&
            isFormThreeValid &&
            isFormFourValid
        );
    }
</script>

<NavigationBar route="/newevent" />

<div
    class="row g-5 justify-content-evenly mx-5 my-5 px-3 pb-5 border border-secondary rounded shadow"
>
    <div class="text-left border-light border-bottom border-1">
        <h1 class="text-primary">Event erstellen</h1>
    </div>

    <div class="container">
        <div class="progress" style="height: 5px">
            <div
                class="progress-bar bg-secondary"
                role="progressbar"
                style={`width: ${progress}%`}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            />
        </div>
    </div>
    {#if curStep == 1}
        <div
            in:fade={{ delay: 0, duration: 500 }}
            out:fade={{ delay: 0, duration: 0 }}
        >
            <StepOne
                bind:isFormValid={isFormOneValid}
                bind:eventname
                bind:eventloc
                bind:partfee
                bind:eventdate
            />
        </div>
    {:else if curStep == 2}
        <div
            in:fade={{ delay: 0, duration: 500 }}
            out:fade={{ delay: 0, duration: 0 }}
        >
            <StepTwo bind:isFormValid={isFormTwoValid} bind:eventdesc />
        </div>
    {:else if curStep == 3}
        <div
            in:fade={{ delay: 0, duration: 500 }}
            out:fade={{ delay: 0, duration: 0 }}
        >
            <StepThree bind:isFormValid={isFormThreeValid} bind:availdomains bind:maxpart bind:regdeadline/>
        </div>
    {:else if curStep == 4}
        <div
            in:fade={{ delay: 0, duration: 500 }}
            out:fade={{ delay: 0, duration: 0 }}
        >
            <StepFour bind:isFormValid={isFormFourValid} bind:timeDessert bind:timeMain bind:timeStarter/>
        </div>
    {/if}

    <div class="d-flex justify-content-center mt-5">
        {#if curStep != 1}
            <button
                type="button"
                class="btn btn-secondary py-2 px-3 me-3"
                style="color: white"
                on:click={() => (curStep -= 1)}
            >
                Zurück
            </button>
        {/if}

        {#if curStep == totalSteps}
            <button
                type="button"
                class="btn btn-primary py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                disabled={!isFormValid}
            >
                Event erstellen
            </button>
        {:else}
            <button
                type="button"
                class="btn btn-primary py-2 px-3"
                on:click={() => (curStep += 1)}
                disabled={!isFormValid}
            >
                Weiter
            </button>
        {/if}
    </div>
</div>
<Confirmation />
