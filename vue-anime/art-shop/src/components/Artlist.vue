<template>
<div id="home">
    
      <h3>{{artCollection.titles[0].title}}</h3>
    <p>{{artCollection.artist}}</p>
    
   <span id="content">
    <img :src="artCollection.image_thumbnail" >
      <p>{{artCollection.labels[0].text}} <br/>{{artCollection.labels[0].source}}</p>
  </span>
   
    

  <!-- 
   <p>{{artCollection.labels[0].text}} <br/>{{artCollection.labels[0].source}}</p>
         <h3>{{artCollection.titles[0].title}}</h3>
  -->

</div>

</template>

<script>
import axios from 'axios'

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
        .get('https://api.smk.dk/api/v1/art/?object_number=kms1&lang=en')
            .then(response =>{
                this.artCollection = response.data.items[0];
                console.log(response.data.items[0]);
                console.log(response.data.items[0].titles[0].title);

                console.log(response.data.items[0].image_thumbnail)
            })
            .catch(err =>{
                console.log(err)
            })
  },

  
}
</script>

<style>
#home{
  
  font-family: garamond-premier-pro, serif;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   gap: 1%;
}
 h3{
    font-family: garamond-premier-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2em;
    color: black;
  }
  #content{
    display: flex;
  flex-direction: row;
  gap: 5%;
  }
  #content img{
    width:200%;
    height: 200%;
    
      
  }


</style>
