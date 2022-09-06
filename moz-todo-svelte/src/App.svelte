<script>
	import {page_shown} from "./data"
	
	import Navbar from './Navbar.svelte'
	import Sidebar from './Sidebar.svelte'
	import Main from './Main.svelte'
	import AboutUs from './About.svelte'
	import ContactUs from './Contact.svelte'

	history.replaceState({"href_to_show":"/"}, "", "/")

	window.addEventListener("popstate", e => {
		console.log(e.state.href_to_show)
		$page_shown = e.state.href_to_show
	})
	let open = false

	window.onload = function () {
		if(window.location == "/about"){
			window.location = "/";
		}
	}
</script>


<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>	
<Main/>


{#if $page_shown == "about"}
	<AboutUs />
{/if}


<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

<style>
	:global(body) {
		padding: 0;
		overflow: hidden;
	}
</style>

