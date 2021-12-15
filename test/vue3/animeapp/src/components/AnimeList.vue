<template>
<p>
    {{animes}}
</p>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
                animes: []
            }
    },
    created() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                this.animes = response.data;
                console.log(response.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },
}
</script>
<style scoped>
</style>