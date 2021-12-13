<template>
<link rel="stylesheet" href="https://use.typekit.net/ljg4uqb.css" />
<div>
<artlist class="artlist"/>
</div>

</template>

<script>
import Artlist from './components/Artlist.vue'



export default {
  name: 'App',
  components: {
    Artlist

  },
  data() {
    return{

    }
  },
  
}
</script>

<style>
.artlist{
  height:30%;
}

</style>
