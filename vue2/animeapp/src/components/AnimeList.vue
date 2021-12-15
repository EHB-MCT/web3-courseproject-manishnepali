<template>
<div class="animelist">
<div id="content">
<ul v-for="anime in animes" :key="anime.id" :anime="anime" id="title">
<p id="animeTitle">{{ anime.title }}</p>
 <p id="animeInfo">{{ anime.original_title_romanised }} // {{anime.original_title}} </p>
 <img :src="anime.image" alt="" id="imgg">
 <Detail
 v-on:click="hide"
 id="detail"/>
<p id="animeDesc"
v-if="!isHidden">{{ anime.description}}</p>
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
    return {
      animes: [],
      isHidden: true,
    };
  },
  methods: {
    hide() {
      this.isHidden = !this.isHidden;
    },
  },
  created() {
    axios
      .get('https://ghibliapi.herokuapp.com/films/')
      .then((response) => {
        this.animes = response.data;
        console.log(response.data);
      });
  },

};
</script>
<style scoped>
p{
    color: red;
}
#animeTitle {
  font-size: 3em;
}
#animeInfo {
  font-size: 2em;
  font-style: bold;
  color: blue;
}
#animeDesc {
  font-size: 1em;
  font-style: italic;
  color: black;
}
#imgg{
  width: 30%;
}
#content{
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: 50px 1fr;
    grid-gap: 15px;
}
#title{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: baseline;
    gap: 2%;
}
</style>
