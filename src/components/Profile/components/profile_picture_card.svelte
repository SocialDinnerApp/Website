<script>
    export let info 
   
    console.log(info)

    let fullname= info.Firstname +' '+ info.Lastname
</script>

<div class="card">
    <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                <div class="mt-3">
                <h4>{fullname}</h4>
                <p class="text-muted font-size-sm">{info.Adress}</p>
                </div>
        </div>
    </div>
</div>