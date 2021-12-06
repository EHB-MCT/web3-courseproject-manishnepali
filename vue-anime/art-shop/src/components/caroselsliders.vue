<template>
 <div v-show="visibleSlide === index" class="caroselsliders">
  <slot></slot>
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

</style>
