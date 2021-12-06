<template>
 <div class="carosel">
     <div id="viewport">
<slot > 
</slot>
</div>
<span id="buttons"></span>
<button id="next">next</button>
<button id="prev">previous</button>

</div>
</template>

<script>


export default {
  name: 'Carosel',
  components: {
    
  }
}
</script>

<style>
#viewport{

    position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;

}
#buttons{

margin-left: 10%;

}

#next, #prev{
align-items: center; 
background: #FFFFFF; 
border: 0 solid #E2E8F0; 
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
 box-sizing: border-box; 
 color: #1A202C; 
 display: inline-flex;
 font-size: 1rem; 
 font-weight: 700; 
 height: 56px;
  justify-content: center; 
  line-height: 24px; 
  overflow-wrap: break-word; 
  padding: 24px; 
  text-decoration: none; 
  width: auto; 
  border-radius: 8px;
  
}:hover{
  cursor: pointer;
}



</style>
