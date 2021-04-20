app.component('fblogpost', {
  props: {

  },
  template:
  /*html*/
  `<div class="row medium-8 large-7 columns">
    <div class="blog-post">
      <h3>Awesome blog post title <small> date </small></h3>
      <img class="thumbnail" v-bind:src="image">
      <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
      <!--<div class="callout">
      <!--  <ul class="menu simple">
          <li><a href="#">Author: Mike Mikers</a></li>
          <li><a href="#">Comments: 3</a></li>
        </ul> -->
      </div>
    </div>
`,
  data() {
   return {

     selection: 1,
     variants: [
       { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/ISS046-E-29249_-_View_of_Earth.jpg"},
       { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Caswell_Cottage_%283947033285%29.jpg"},
     ]
   }
 },
 methods: {

   setImage(){
     this.image = "https://upload.wikimedia.org/wikipedia/commons/d/d1/ISS046-E-29249_-_View_of_Earth.jpg"
   }

 },
 computed: {
   image() {
     return this.variants[this.selection].image
   },
 }


})
