<script>
	export let open = false
	import {page_shown} from "./data.js"

  	const show_page = () =>{
    	// console.log(event.target.getAttribute("href"))
    	const url = event.target.getAttribute("href")
    	history.pushState({"href_to_show":url}, '', url)
    	$page_shown = url
  	}

</script>

<aside class="absolute w-full h-full border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<!--<div class="vertical"></div> -->
		<a class="block" href="about" on:click|preventDefault={show_page} class:open on:click={() => open = !open}>About</a>
		<a class="block" href="contact" on:click|preventDefault={show_page} class:open on:click={() => open = !open}>Contact</a>
	</nav>
</aside>

<style>
	*{
		z-index: 3;
	}
	aside {
		border-color: black;
		background-color: rgb(190,227,248);	
		right: -100%;
		transition: right 0.3s ease-in-out;
	}
	/*
	.vertical {
            border-left: 5px solid black;
			bottom: 35px;
            height: 90%;
			
			position: absolute;
    }
	*/
	.open {
		right: 0;
	}

	nav {
		text-align: right;
		padding: 5%;
	}
	a {
		color: black;
	}
	a:hover{
		color: rgb(43,108,176);
		text-decoration: none;
	}
</style>