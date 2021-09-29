<template>
  <div class="home">
    <div class ="anime">
      <img src="../assets/anime.jpeg" id="big">
    </div>
  </div>
</template>

<script>
export default {
  name: 'animeapp',
  props: {
    msg: String,
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
