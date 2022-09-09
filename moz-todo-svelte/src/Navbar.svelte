<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	
	export let sidebar = false
</script>

<header class="flex justify-between bg-blue-200 p-2 items-center text-black-600 border-b-2">
	<nav class="flex">
		<Logo/>	
	</nav>
	
	<Hamburger bind:open={sidebar}/>
</header>


<style>
	
</style>