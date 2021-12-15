<template>

<div id="home" >
<div v-for="(art, index) in artCollection" :key="`art-${index}`" id="list">

        <h3>{{art.titles[0].title}}</h3>
       <p> {{art.artist[0]}} </p>

         <img :src="art.image_thumbnail"
        v-on:click="size"
    
        ref="targeted"
         id="imgg"> 
        
         <button id="buy">buy</button>
           <!-- <vue-picture-swipe :art="image_thumbnail"></vue-picture-swipe> -->

   
</div>
</div>
</template>

<script>
import axios from 'axios'
import {resize, show} from '../animate'


export default {
  name: 'Artlist',
  components: {
 
  },
  data() {
    return{
      artCollection : []
    }
  },
  created(){
      axios
        .get('https://api.smk.dk/api/v1/art/search/?keys=all&offset=0&rows=30&lang=en')
            .then(response =>{
                this.artCollection = response.data.items;
                console.log(response.data);
                console.log(response.data.items[0].titles[0].title);
                console.log(response.data.items[0].image_thumbnail);
            })
            .catch(err =>{
                console.log(err)
            })
  },
  methods: {
        size() {
          
          console.log(event.path[0]);
          console.log(event.path[0].nextElementSibling);

              resize(event.path[0]);
            show(event.path[0].nextElementSibling);
          
        }
  },
}
</script>

<style>
#home{

  font-family: garamond-premier-pro, serif;
 
  flex-direction: column;
}

#list {
 display: flex;
  flex-direction: column;
  background-color: #F2F2F2;
  align-content: center;
  gap: 10%;
  padding: 5%;

}
 h3{
    font-family: garamond-premier-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3em;
    color: black;
  }
 
  #imgg{
    border-radius: 80px;
    width: 20%;
   
  }
#buy{
  margin-top: 5%;
  opacity: 0;
  float: right;
  width: 20%;
	height: 7%;
	border-radius: 3px;
	color: #fff;
	background: #027ad6;
	font: 700 24px sans-serif;
	box-shadow:
		0 1px 2px rgba(0,0,0,0.07), 
		0 2px 4px rgba(0,0,0,0.07), 
		0 4px 8px rgba(0,0,0,0.07), 
		0 8px 16px rgba(0,0,0,0.07),
		0 16px 32px rgba(0,0,0,0.07), 
		0 32px 64px rgba(0,0,0,0.07);
}

</style>
