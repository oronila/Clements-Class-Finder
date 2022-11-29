<script>
export let inputValue = "";
</script>

<style>
/* The search field */
#searchInput {
  box-sizing: border-box;
	border-radius: 25px;
  font-size: 1.2rem;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}
#searchInput:focus {outline: 3px solid #ddd;}
	
#search-icon {
	position: absolute;
	left: 10px;
	top: 10px;
	font-size: 1.2rem;
}	
</style>


<input type="text" placeholder="Search..." autocomplete="off" id="searchInput" bind:value={inputValue} on:input>
<span id="search-icon">=</span>