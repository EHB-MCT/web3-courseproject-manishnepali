<template>
<div class="animelist">
<div id="content">
<ul v-for="anime in animes" :key="anime.id" :anime="anime" id="title">
<li><h3>{{ anime.title }}</h3></li>
 <p>{{ anime.original_title_romanised }} // {{anime.original_title}} </p>
<p>{{ anime.description}}</p>
<Detail/>
</ul>
</div>
</div>
</template>
<script>
import axios from 'axios';
import Detail from './detail.vue';

export default {
  components: {
    Detail,
  },
  data() {
    return { animes: [] };
  },
  created() {
    axios
      .get('https://ghibliapi.herokuapp.com/films/')
      .then((response) => {
        this.animes = response.data;
      });
  },

};
</script>
<style scoped>
p{
    color: red;
}
#content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: 50px 1fr;
    grid-gap: 15px;
    width: 100%;
    margin-bottom: 2.5% ;
}
</style>
