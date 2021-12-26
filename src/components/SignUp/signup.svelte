<script>
    import NavigationBar from "./components/NavigationBar.svelte";
    import SignUpCard from "./components/SignUpCard.svelte";
</script>

<div class="vh-100 ctm-bg-img">
    <NavigationBar />
    <div
        class="row d-flex justify-content-center align-items-center gx-5 ctm-vh-90"
    >
        <div class="col-xl-6 col-lg-12">
            <div class="d-flex justify-content-center">
                <img
                    src="images/register.png"
                    alt="Have fun"
                    class="img-fluid"
                />
            </div>
        </div>
        <div class="col-xl-3 col-lg-12">
            <SignUpCard />
        </div>
    </div>
</div>

<style>
    .ctm-bg-img {
        background-image: url("../images/background.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
    }

    .ctm-vh-90 {
        height: 90vh;
    }
</style>
