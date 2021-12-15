<template>
<div>
  <p>
    this is a art shop
  </p>
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
  <button v-on:click="go">Click Here to Animate</button>
    <div class="box" ref="square"></div>
</div>

</template>

<script>
import {translate} from '../animate';

export default {
  name: 'Test',
  components: {
  },
  data() {
    return{
        counter: 0
    }
  },
   methods: {
    go() {
      translate('.box')
      }
   }
  
}
</script>

<style>
.box{
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}

</style>
