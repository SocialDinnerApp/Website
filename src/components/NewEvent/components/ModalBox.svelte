<script lang="ts">
    import {push} from 'svelte-spa-router'

    export let headertext: string;
    export let bodytext: string;
    export let modalId: string;
    export let okRoute: string;

    function onClickButton() {
        push(okRoute)
    }

</script>
<div
    class="modal fade"
    id={modalId}
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-secondary">
                <h5 class="modal-title text-info" id="exampleModalLabel">
                    {headertext}
                </h5>
            </div>
            <div class="modal-body">
                <p>{bodytext}</p>
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button> -->
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={onClickButton}>OK</button>
            </div>
        </div>
    </div>
</div>
