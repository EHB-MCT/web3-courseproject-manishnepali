<template>
  <div class="home">
    <AnimeList/>
  </div>
</template>

<script>
import AnimeList from './AnimeList.vue';

export default {
  name: 'ghibli movies',
  props: {
    msg: String,
  },
  components: {
    AnimeList,
  },
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
