<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-blue-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">Aboutt</a>
		<a class="block" href="contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>