const app = Vue.createApp({
template: '<h1> hello {{firstname}} </h1> <ul v-for="post in posts" v-bind:key="post.id"> <li>{{ post.title }}</li><p>{{ post.body }}</p></ul>',
data(){

    return{
        firstname : "stan",
        posts: [],
    }
},
methods: {
    async getData() {
      try {
        let response = await fetch("http://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();;
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
