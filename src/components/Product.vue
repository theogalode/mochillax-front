<template>
<div>
  <div class="glry-card" >
    <img
      :src="product.image_url"
      alt=""
      srcset=""
      v-on:click="showDetails = !showDetails"
    />
    <div class="glry-card-data" v-on:click="showDetails = !showDetails">
      <p id="p-name">{{product.name}}</p>
      <p id="p-price">{{product.price}} $</p>
    </div>
    
  </div>
  <Product-details 
  v-on:childToParent="onChildClick" 
  :isShow="showDetails" 
  :product="product" 
  v-on:isShow="showDetails = false"/>
</div>
  
</template>

<script>
import ProductDetails from './ProductDetails.vue';
export default {
  methods: {
    onChildClick (value) {
      this.showDetails = value;
    }
  },
  data () {
    return {
      showDetails: false,
    }
  },
  components: { ProductDetails },
  name: "Product",
  props: {
    product: Object
  },

  
};
</script>

<style scoped>
.glry-card {
  margin: 20px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 20px;
  max-width: 230px;
  background-color: var(--main-color);
  border: 3px solid var(--main-color);
  transition: 0.3s;
}

.glry-card:hover { 
  box-shadow: 3px 3px 0px 3px #B88339;
  transform: translate(-5px, -5px);
}

.glry-card > img {
  border-radius: 20px;
  width: 100%;
  height: 230px;
  object-fit: cover;
  image-rendering: optimizeQuality;
  cursor: pointer;
}

.glry-card > .glry-card-data {
  text-align: center;
  padding: 4px;
  cursor: pointer;
}

.glry-card > .glry-card-data > #p-name {
  font-size: 18px;
  font-weight: 800;
}

.glry-card > .glry-card-data > #p-price {
  letter-spacing: 1px;

}
</style>