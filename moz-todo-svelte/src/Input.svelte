<script>
  export let inputValue = "";
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
    /*
  #searchInput2 {
    box-sizing: border-box;
    font-size: 1rem;
    padding: 14px 20px 12px 15px;
    border: none;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
  }
  #searchInput:focus {outline: 2px solid #ddd;}
    
  #searchInput2:focus {outline: 2px solid #ddd;}
    
    #container {
      display: inline-block;
    }
    
  #arrow {
    height: 30px;
    width: 80px;
    margin-top: auto;
  }
    */
  </style>
  
  <div id="container">
  <input type="text" placeholder="Enter start..." autocomplete="off" id="searchInput" bind:value={inputValue} on:input>
    <!--<img id="arrow" src=https://static.vecteezy.com/system/resources/thumbnails/008/844/878/small/arrow-icon-design-free-png.png alt="arrow pointing right">
  <input type="text" placeholder="Enter destination..." autocomplete="off" id="searchInput2" bind:value={inputValue2} on:input> -->
  </div>