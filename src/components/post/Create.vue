<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Crear Post </h2>
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="title"> Titulo </label>
          <input type="text" id="title" v-model="title" name="title" class="form-control" placeholder="Ingresa el titulo">
        </div>
        <div class="form-group col-md-12">
          <label for="description"> Descripción </label>
          <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Ingresa la descripción">
        </div>
        <div class="form-group col-md-12">
          <label for="body"> Contenido </label>
          <textarea id="body" cols="30" rows="5" v-model="body" class="form-control"></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="author"> Autor </label>
          <input type="text" id="author" v-model="author" name="author" class="form-control" placeholder="Ingrese el autor">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Crear Post </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
 data() {
   return {
     title: "",
     description: "",
     body: "",
     author: "",
     date_posted: ""
   };
 },
 created() {
   this.date_posted = new Date().toLocaleDateString();
 },
 methods: {
   createPost() {
     let postData = {
       title: this.title,
       description: this.description,
       body: this.body,
       author: this.author,
       date_posted: this.date_posted
     };
     this.__submitToServer(postData);
   },
   __submitToServer(data) {
     axios.post(`/blog/post`, data).then(data => {
       router.push({ name: "home" });
     });
   }
 }
};
</script>