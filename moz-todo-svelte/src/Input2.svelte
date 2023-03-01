<script>
    export let inputValue2 = "";
    </script>
    
    <style>
    /* The search field */
    #searchInput {
      box-sizing: border-box;
      font-size: 1rem;
      padding: 14px 20px 12px 15px;
      border: none;
      border-bottom: 1px solid #ddd;
        display: inline-block;
    }
    </style>
    
    <div id="container">
    <input type="text" placeholder="Enter destination..." autocomplete="off" id="searchInput" bind:value={inputValue2} on:input>
    </div>