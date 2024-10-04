<script>
export default {
  name: 'PostsViewVue',
  data() {
    return {
      posts: []
    }
  }
}
</script>

<template>
  <div class="posts">
    <h1>Vista de Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>