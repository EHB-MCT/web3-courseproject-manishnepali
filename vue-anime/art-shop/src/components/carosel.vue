<template>
 <div class="carosel">
     <div id="viewport">
<slot > 
</slot>
</div>
<span id="buttons"></span>


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





</style>
