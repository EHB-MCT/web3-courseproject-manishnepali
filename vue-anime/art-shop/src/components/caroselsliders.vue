<template>
 <div v-show="visibleSlide === index" class="caroselsliders">
  <slot></slot>
  <button id="next">next</button>
<button id="prev">previous</button>
 </div>

</template>

<script>


export default {
  name: 'Caroselsliders',
  props: ["visibleSlide", "index"],
  components: {
    
  }
}
</script>

<style>
.caroselsliders{
  display: flex;
  flex-direction: column;
}
#next, #prev{
background: #FFFFFF; 
border: 0 solid #E2E8F0; 
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
 box-sizing: border-box; 
 color: #1A202C; 
 display: inline-flex;
 font-size: 1rem; 
 font-weight: 700; 
 height: 5%;
  justify-content: center; 
  line-height: 24px; 
  overflow-wrap: break-word; 
  padding: 5%; 
  text-decoration: none; 
  width: auto; 
  border-radius: 8px;
  
}
#next:hover, #prev:hover{
  cursor: pointer;
}
</style>
