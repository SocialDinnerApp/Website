<script lang="ts">
    import NavigationBar from "./components/NavigationBar.svelte";
    import SectionOne from "./components/SectionOne.svelte";
    import SectionTwo from "./components/SectionTwo.svelte";
    import SectionThree from "./components/SectionThree.svelte";
    import {dialogFlowKey} from "../../../keys"
    import {fade} from "svelte/transition"

    let isChatBoxShowing: boolean = false;
</script>

<div on:click={() => isChatBoxShowing = false}>
    <NavigationBar />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
</div>

{#if isChatBoxShowing}
    <div class="chatbox" in:fade="{{ delay: 0, duration: 500 }}" out:fade="{{ delay: 0, duration: 500}}">
        <iframe
            class="border border-light shadow rounded"
            allow="microphone;"
            width="350"
            height="430"
            src={`https://console.dialogflow.com/api-client/demo/embedded/${dialogFlowKey}`}
        />
    </div>
{:else}
    <button
        class="chat-button shadow"
        in:fade="{{ delay: 0, duration: 500 }}" out:fade="{{ delay: 0, duration: 500}}"
        on:click={() => (isChatBoxShowing = true)}>Chat</button
    >
{/if}

<style>
    .chatbox {
        /* padding: 10px; */
        width: 350px;
        height: 430px;
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1;
        background-color: white;
    }
    .chat-button {
        background-color: #492774;
        border: none;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1;
    }
</style>
