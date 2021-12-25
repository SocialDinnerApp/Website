<script lang="ts">
	import Router from "svelte-spa-router";
	import LandingPage from "./components/LandingPage/LandingPage.svelte";
	import SignUp from "./components/SignUp/signup.svelte";
	import SignIn from "./components/SignIn/signin.svelte";
	import NotFound from "./components/NotFound/notfound.svelte";

	let routes = {
		"/": LandingPage,
		"/signup": SignUp,
		"/signin": SignIn,
		"*": NotFound,
	};
</script>

<main class="container">
	<Router {routes}/>
</main>

<style>
	/* .container {
		width: 1080px;
		margin: 0 auto;
	} */
</style>
