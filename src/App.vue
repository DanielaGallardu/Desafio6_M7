<script>
export default {
  name: 'App',
};
</script>
<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
      <router-link to="/contact">Contacto</router-link>
      <router-link to="/posts">Publicaciones</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style>
body {
  background-color: #1a1a1a;
  color: #f0f0f0;
}

nav {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  background-color: #7d1f24;
  padding: 10px;
  border-radius: 5px;
}

nav a {
  text-decoration: none;
  color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 5px;
}

nav a:hover {
  background-color: #9c2a32;

}
</style>
