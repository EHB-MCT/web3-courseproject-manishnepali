<template>
<div id="home" >
    <li v-for="(art, index) in artCollection" :key="`art-${index}`" id="list">
        <h3>{{art.titles[0].title}}</h3>
       <p> {{art.artist[0]}} </p>


        <img :src="art.image_thumbnail"
        v-on:click="size"
       v-on: 
        ref="targeted"
         id="imgg">
     
    </li>
      <!-- <h3>{{artCollection.titles[0].title}}</h3> -->
    <!-- <p>{{artCollection.artist}}</p>
    
   <span id="content">
    <img :src="artCollection.image_thumbnail" >
      <p>{{artCollection.labels[0].text}} <br/>{{artCollection.labels[0].source}}</p>
  </span> -->
   
    

  
   <!-- <p>{{artCollection.labels[0].text}} <br/>{{artCollection.labels[0].source}}</p> -->
         <!-- <h3>{{artCollection.titles[0].title}}</h3> -->
 

</div>

</template>

<script>
import axios from 'axios'
import {resize} from '../animate'

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
        .get('https://api.smk.dk/api/v1/art/search/?keys=all&offset=0&rows=10&lang=en')
            .then(response =>{
                this.artCollection = response.data.items;
                console.log(response.data);
                console.log(response.data.items[0].titles[0].title);

                console.log(response.data.items[0].image_thumbnail)
            })
            .catch(err =>{
                console.log(err)
            })
  },
  methods: {
        size() {
          
          console.log(event.path[0]);
          console.log(this);

              resize(event.path[0]);
          
        }
  },
// https://api.smk.dk/api/v1/art/search/?keys=*&offset=0&rows=10&lang=en
//  'https://api.smk.dk/api/v1/art/?object_number=kms1&lang=en' 
}
</script>

<style>
#home{
  height: 70%;
  font-family: garamond-premier-pro, serif;
  display: flex;
  flex-flow: column;
  list-style: none;
 

}
#list{
  height: 30%;
  padding: 5%;
  flex-direction: column;
   align-content: center;
   



}
 h3{
    font-family: garamond-premier-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2em;
    color: black;
  }
 
  #imgg{

    width: 40%;
      
  }


</style>
