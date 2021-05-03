<template>
  <div class="glry-card">
    <img
      :src="product.image_url"
      alt=""
      srcset=""
    />
    <div class="glry-card-data">
      <p id="p-name">{{product.name}}</p>
      <p id="p-price">{{product.price}} $</p>
    </div>
    <Product-details v-if="showDetails" />
  </div>
</template>

<script>
import ProductDetails from './ProductDetails.vue';
export default {
  data () {
    return {
      showDetails: {
        type:Boolean, 
        default: false
      }
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
.glry-card > img {
  border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: contain;
  image-rendering: optimizeQuality;
}

.glry-card > .glry-card-data {
  text-align: center;
  padding: 4px;
}

.glry-card > .glry-card-data > #p-name {
  font-size: 18px;
  font-weight: 800;
}

.glry-card > .glry-card-data > #p-price {
  letter-spacing: 1px;
}
</style>