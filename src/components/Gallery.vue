<template>
  <div class="glry">
    <div class="glry-header">
      <div class="filter">
        <h1 id="glry-title">{{category.name}}</h1>
        <p id="glry-description">
          {{category.description}}
        </p>
      </div>
    </div>
    <div class="glry-content">
      <div class="glry-card" v-for="product in category.items" v-bind:key="product.id">
        <Product v-bind:product="product"/> 
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  name: "Gallery",
  components: {
    Product
  },
  props: {
    category: Object,
  },
};
</script>

<style scoped>
.glry {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--main-light-color);
  overflow-y: auto;
}

.glry .glry-header {
  flex: 1;
  display: flex;
  background-image: url("https://i.pinimg.com/originals/6e/00/16/6e0016c174b767455aeeb1e43066f008.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  max-height: 30vh;
  min-height: 25vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
}

.filter {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: linear-gradient(0.55turn,rgba(255, 177, 66, 1), rgba(33, 140, 116,0.6));
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px;
}

.filter::before {
  content: "";
  position: absolute;
}

.glry .glry-header #glry-title {
  font-family: "Leckerli One", cursive;
  font-weight: normal;
  font-size: 4em;
  color: white;
  padding: 0px;
  margin: 0px;
}

.glry .glry-header #glry-description {
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin: 0px;
  line-height: 1.1em;
}

.glry .glry-content {
  flex: 4;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.glry .glry-content > .glry-card {
  flex-grow: 4;
  margin: 20px;
  border-radius: 20px;
  max-width: 230px;
  background-color: var(--main-color);
}
</style>