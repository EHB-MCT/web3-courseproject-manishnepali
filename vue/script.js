const app = Vue.createApp({
template: `<h1 id="pagetitle"> {{title}} </h1> 
<div id="content">
<ul v-for="film in films" v-bind:key="film.id" id="title"> 

<li><h3>{{ film.title }}</h3></li>  <img src={{film.url}}>
 <p>{{ film.original_title_romanised }} // {{film.original_title}} </p>
<p>{{ film.description}}</p>
<button>add to watch later</button>
</ul>
</div>`,
data(){

    return{
        title : "ghibli studio movielist",
        films: [],
       
    }
},
methods: {
    async getData() {
      try {
        let response = await fetch("http://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();
        let ghibli = await fetch("https://ghibliapi.herokuapp.com/films/")
        this.films = await ghibli.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
})

app.mount('#app')






// var app = new Vue({
//     el: '#app',
//     data: {
//         content: 'hello world from vue',
//         image: './assets/hello.jpeg',
//         isClint: true
//     }
// });
