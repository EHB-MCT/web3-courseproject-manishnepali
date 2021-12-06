<template>
 <carosel> 
   <caroselsliders v-for="(slide, index) in slides" 
   :key="slide" 
   :index="index"
   :visibleSlide="visibleSlide">
     <img :src="slide" alt="">
   </caroselsliders>
 </carosel>

</template>

<script>
import Carosel from './components/carosel.vue'
import Caroselsliders from './components/caroselsliders.vue'

export default {
  name: 'App',
  components: {
    Carosel,
    Caroselsliders
  },
  data() {
    return{
      slides: [
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700",
          "https://picsum.photos/id/237/700"
      ],
      visibleSlide : 0,
    }
  }
}
</script>

<style>
#app {
 
}

</style>
