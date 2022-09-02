<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-blue-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.3s ease-in-out;
	}
	
	.open {
		right: 0;
	}

	nav {
		text-align: right;
		padding: 5%;
	}
</style>