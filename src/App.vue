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
    <div class="navbar">
      <div class="label">
        <a href="/"><span>Mochillax</span></a>
      </div>
      <div class="left">
        <a href="/inicio">Inicio</a>
        <a href="/shop">Shop</a>
        <a href="/historia">Historia</a>
        <a href="/contactos">Contactos</a>
      </div>
      <div class="right">
        <a href="#" @click="showCart = !showCart">
          <i><font-awesome-icon :icon="['fas', 'shopping-bag']" /></i>
          <p>Mi orden</p>
        </a>
        <a href="#">
          <i><font-awesome-icon :icon="['fas', 'user-circle']" /></i>
          <p>Mi cuenta</p>
        </a>
      </div>
  </div>
    <!-- TODO=: Get the current navbar item selected  -->
    <Shop  v-bind:categories="data" />
    <ShopCart 
    v-on:childToParent="setShowCart" 
    :isShow="showCart"
    v-on:isShow="showDetails = false"
    />
    <DeliveryData />
  </div>
</template>

<script>
import data from "../dev_data/data.json";
import menu from "../dev_data/menu.json";

import Shop from "./components/Shop.vue";
import ShopCart from "./components/ShopCart.vue";
import DeliveryData from "./components/DeliveryData.vue"

export default {
  name: "App",
  data() {
    return {
      data: data,
      links: menu,
      showCart: false,
      cartProducts: []
    };
  },
  methods: {
    setShowCart(value) {
      this.showCart = value;
    },
    addProductInCart(p){
      this.cartProducts.push(p);
    },
    removeProductFromCart(p){
      this.cartProducts.forEach(element => {
        if (element.id == p.id) {
          this.cartProducts.pop();
        }
      });
    }
  },
  components: {
    Shop,
    ShopCart,
    DeliveryData
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
  --main-color: #ffb142;
  --main-light-color: white;
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

button{
  border: solid 0px transparent;
}

button {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: var(--main-color);
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #FF9500;
}
.navbar {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 4.75em;
  background-color: var(--main-color);
  font-family: "Leckerli One", cursive;
}

.navbar .label {
  flex: 1;
  font-size: 2.75rem;
  width: 100%;
  height: auto;
  max-height: 180px;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}

.navbar .left {
  flex: 4;
  display: flex;
  align-items: center;
}

.navbar a {
  margin: 10px;
}

.navbar .right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.navbar .right a {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
}

.navbar .right a > i{
  margin: 0;
  padding: 0;
  font-size: 22px;
}

.navbar .right a > p {
  margin: 0;
  padding: 0;
  font-family: 'Nunito';
}
</style>
