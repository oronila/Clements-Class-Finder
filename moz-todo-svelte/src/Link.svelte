<script>
	export let link;
</script>

<style>
a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}	
	
a:hover {background-color: #ddd; border-radius: 25px}
</style>


<a href="#{link.toLowerCase()}">{link}</a>