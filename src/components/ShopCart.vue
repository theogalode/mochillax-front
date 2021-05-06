<template>
  <div class="container" v-if="isShow">
    <div class="card">
      <div class="close" @click="emitToParent()"></div>
      <div class="content">
        <h1>Mis compras</h1>
        <div class="product-list">
          <ShopCartLine />
          <ShopCartLine />
          <ShopCartLine />
          <ShopCartLine />
        </div>
        <div class="separator"></div>
        <div class="footer">
          <div class="total-price">
            <p class="tva">TVA: 20%</p>
            <p class="price">TOTAL CON IMPUESTO: {{totalPriceWithTax}}$</p>
          </div>
          <button>Hacer el pedido</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopCartLine from './ShopCartLine';
export default {
  name:"ShopCart",
  components: {
    ShopCartLine
  },
  data() {
    return {
      total: 40,
    }
  },
  created () {

  },
  computed: {
    totalPriceWithTax: function () {
      return this.total + (this.total*0.20);
    }
  },
  watch: {

  },
  props: {
    products: Array,
    isShow: Boolean
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', !this.isShow)
    }
  },
}
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
  }

  .card {
    position: fixed;
    width: 70%;
    height: fit-content;
    background-color: var(--main-light-color);
    border-radius: 15px;
  }

  .card .content {
    display: flex;
    padding: 50px;
    justify-content: center;
  }

  .card .content > h1 {
    align-self: flex-start;
    font-family: "Leckerli One", cursive;
    font-size: 2.75rem;
  }

  .product-list {
    width: 100%;
    max-height: 40vh;
    padding: 5px;
    overflow-y: auto;
  }

  .separator {
    width: 100%;
    height: 5px;
    background-color: black;
    margin-top: 7px;
    margin-bottom: 7px;
    border-radius: 30px;
  }

  .footer {
    display: flex;
    align-items: center;
  }

  .footer .total-price {
    flex: 4;
  }

  .footer button {
    flex: 1;
  }

  .card .close::before {
    content: "X";
    font-weight: bold;
    text-align: center;
    width: 21px;
    position: absolute;
    top: 0;
    right: 0;
    border: solid 3px black;
    margin: 20px;
    padding: 3px;
    border-radius: 30px;
    cursor: pointer;
    transition: .3s;
  }

  .card .close:hover:before {
    content: "Salir";
    font-size: 18px;
    font-weight: bold;
    transform: rotate(28deg);
    color: black;
  }
</style>