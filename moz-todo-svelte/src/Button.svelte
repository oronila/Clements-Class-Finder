<script>
	export let menuOpen;
</script>

<style>	
/* Dropdown Button */
.dropbtn {
  background-color: darkblue;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
	
	/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #3e8e41;
}

</style>

  <button on:click class="dropbtn">{!menuOpen ? "Show Menu" : "Close Menu"}</button>
