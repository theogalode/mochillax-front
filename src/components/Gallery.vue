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
    <div class="flex-centered">
      <div class="glry-content">
        <Product v-for="product in products" v-bind:key="product.id" v-bind:product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import ProductService from "../services/product.service";
import ProductModel from "../models/product.model";
export default {
  async mounted() {
    if (this.category.id !== undefined) {
      ProductService.getAllProductsByCategoryId(this.category.id)
      .then((result) => {
        if (result) {
          for (let i = 0; i < result.length; i++) {
            const element = new ProductModel(result[i]);
            this.products.push(element);
          }
        }
      }).catch((err) => {
        console.log(err); 
      }); 
    }
  },
  name: "Gallery",
  data () {
    return {
      products: [],
    }
  },
  components: {
    Product
  },
  
  props: {
    category: Object,
  },
};
</script>

<style scoped>
.flex-centered {
  width: 100%;
  display: flex;
  justify-content: center;
}

.glry {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--main-light-color);
  overflow-y: auto;
}

.glry .glry-header {

  display: flex;
  background-image: url("https://i.pinimg.com/originals/6e/00/16/6e0016c174b767455aeeb1e43066f008.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: fit-content;
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
  width: 100%;
  height: fit-content;
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
  flex: 5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  padding: 0;
  margin: 0;
}


</style>