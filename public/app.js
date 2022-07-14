import { createApp } from 'vue';
import store from './store';
import HomeVue from 'src/components/post/Home.vue';
import CreateVue from 'src/components/post/Create.vue';
import EditVue from 'src/components/post/Edit.vue';
import PostVue from 'src/components/post/Post.vue';

const app = createApp({
  compilerOptiones: {
    delimiters: ['${', '}$'],
  },
});

app
  .component('home-view', HomeVue)
  .component('create-view', CreateVue)
  .component('edit-view', EditVue)
  .component('post-view', PostVue);

app.use(store).use(HomeVue).mount('#app');
