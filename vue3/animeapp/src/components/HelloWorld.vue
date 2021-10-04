<script setup>
import { ref } from 'vue'
import MyButton from './Button.vue'
import AnimeList from './Button.vue'


defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
 hello world
  </p>
  <button>
    option
  </button>
  <MyButton /> 
  <Animelist />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
