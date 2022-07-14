<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px;">
        <small>
          <button class="btn btn-success" v-on:click="navigate()"> Ver todos los posts </button>
        </small>
      </h4>
      <hr>
      <h2>{{ post.title }}</h2>
      <h5>
        <span class="glyphicon glyphicon-time"></span> Posteado por {{post.author}}, {{post.date_posted}}.
      </h5>
      <p> {{ post.body }} </p>

    </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      post: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get(`/blog/post/${this.id}`)
        .then(data => (this.post = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>