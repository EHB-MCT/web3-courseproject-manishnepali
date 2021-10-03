<template>
  <div class="home">
    <div class ="anime">
      <img src="../assets/anime.jpeg" id="big">
    </div>
    <my-button/>
  </div>
</template>

<script>
import MyButton from './detail.vue'
export default {
  name: 'animeapp',
  props: {
    msg: String,
  },
  components: {
    MyButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
text-align: center;
}
.anime{
height: 70%;
}
#big{
  width: 30%;
}
</style>
