<script>
	import Logo from "./Logo.svelte";
	import Hamburger from "./Hamburger.svelte";

	export let sidebar = false;
</script>

<header
	class="flex justify-between bg-blue-200 p-2 items-center text-black-600 border-b-2"
>
	<nav class="flex">
		<div class="Logo">
			<Logo />
		</div>
	</nav>

	<Hamburger bind:open={sidebar} />
</header>

<style>
	.flex {
		height: 8%;
		padding-bottom: 0;
		margin: 0;
	}
	.Logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
