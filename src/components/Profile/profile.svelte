<script>
   import NavigationBar from "../NavigationBar/navigationbar.svelte";
  import ProfilePictureCard from "./components/profile_picture_card.svelte";
  import DataCard from "./components/data_card.svelte"
import { info } from './components/info'
  

 
</script>

<NavigationBar route="/profile" />


<div
    class="g-5 justify-content-evenly m-5 p-5 border border-secondary rounded shadow"
>
    <div class="border-light border-bottom border-1">
        <h1 class="text-primary">Profile</h1>
    </div>
    <div class="container">
        <div class="main-body">
        

        
              <div class="row gutters-sm">
                    <div class="col-md-4" style="margin-top: 20px;">
                       {#each info as info (info.id)}
                      <ProfilePictureCard {info}/>
                      {/each}
                    </div>
                <div class="col-md-8">
                  <div class="card mb-3">
                      {#each info as info (info.id)}
                      <DataCard {info}/>
                      {/each}
                  </div>

                </div>
            </div>
  
          </div>
      </div>
</div>


<style>
    .card{
        margin-top: 20px;
    }
</style>