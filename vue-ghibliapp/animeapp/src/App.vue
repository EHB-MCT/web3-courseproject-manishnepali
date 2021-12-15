<template>
<img src="./assets/ghibli.png" id="logo">
<HomePage/>
</template>
<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
*{
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;

}
#logo{
  top:0;
  left: 0;
  position: fixed;
  width: 10%;
}
</style>
