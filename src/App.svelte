<script lang="ts">
	import Router from "svelte-spa-router";
	import LandingPage from "./components/LandingPage/LandingPage.svelte";
	import SignUp from "./components/SignUp/signup.svelte";
	import SignIn from "./components/SignIn/signin.svelte";
	import NotFound from "./components/NotFound/notfound.svelte";
	import MyEvents from "./components/MyEvents/MyEvents.svelte";
	import Mystatistics from "./components/MyStatistics/mystatistics.svelte";
	import NewEvent from "./components/NewEvent/newevent.svelte";
	import EventDetails from "./components/EventDetails/eventdetails.svelte";
	import Profile from "./components/Profile/profile.svelte";
	import ProfileEdit from "./components/Profile/components/profile_edit.svelte";

	let routes = {
		"/": LandingPage,
		"/signup": SignUp,
		"/signin": SignIn,
		"/myevents": MyEvents,
		"/myevents/:eventId": EventDetails,
		"/mystatistics": Mystatistics,
		"/newevent": NewEvent,
		"/profile":Profile,
		"/profile/edit":ProfileEdit,
		"*": NotFound,
	};
</script>

<main class="mx-auto" style="max-width: 1920px;">
	<Router {routes} />
</main>

<style>
	/* .container {
		width: 1080px;
		margin: 0 auto;
	} */
</style>
