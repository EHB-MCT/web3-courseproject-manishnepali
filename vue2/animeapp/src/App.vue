<template>
<header>
  <nav>
    <ul>
      <li id="logoList"><img src="./assets/ghibli.png" id="logo">
      animelist</li>
    </ul>
  </nav>
</header>
  <main>
  <HomePage/>
</main>

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
  margin-top:20%;
}
nav{
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
