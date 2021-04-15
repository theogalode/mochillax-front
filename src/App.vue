<template>
  <div id="app">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </head>

    <Navbar v-bind:links="menu" />
    <Shop v-bind:categories="data" />
  </div>
</template>

<script>
import data from "../dev_data/data.json";
import menu from "../dev_data/menu.json";

import Shop from "./components/Shop.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {
      data: data,
      menu: menu,
    };
  },
  components: {
    Shop,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: 'Nunito',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin-top: 60px;
  --main-color: #fcfe8b;
  --main-light-color: #fffae2;
  --accent-light-color: #d7a0a0;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style-type: none;
}

p {
  padding: 0;
  margin: 0;
}
</style>
