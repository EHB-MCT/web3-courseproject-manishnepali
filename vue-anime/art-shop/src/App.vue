<template>
<link rel="stylesheet" href="https://use.typekit.net/ljg4uqb.css" />
<navbar></navbar>
<artlist></artlist>

</template>

<script>
import Artlist from './components/Artlist.vue'
import Navbar from './components/Navbar.vue'



export default {
  name: 'App',
  components: {
    Artlist,
    Navbar

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
