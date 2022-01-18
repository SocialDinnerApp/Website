<script>
    export let info 
    //import {info} from "./info"
    console.log(info)
   
  //  const i =info[0]
</script>

<div class="card">
    <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
            <img src={info.image} alt="Admin" class="rounded-circle" width="150">
                <div class="mt-3">
                <h4>{info.Universität}</h4>
                </div>
        </div>
    </div>
</div>

<!-- <style>
.card {
 border: 0px;

    }

</style> -->