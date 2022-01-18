<script lang='ts'>
    //export let info 
    import {info} from "./info"
    console.log(info)
   
    const i =info[0]
</script>


<div class="card ">
    <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
            <img src={i.image} alt="Admin" class="rounded-circle border border-light" width="340px"  >
        </div>
    </div>
</div>


<style>
    .card{
        width: max-content;
        height: max-content;
        border: 0px;
    }
</style>