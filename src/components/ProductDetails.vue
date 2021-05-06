<template >
  <div class="container" v-if="isShow">
    <div class="card">
      <div class="close" @click="emitToParent()"></div>
      <img :src="product.image_url" alt="">
      <div class="content">
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
        <div class="metrics">
          <p>Largo: 60 cm</p>
          |
          <p>Ancho: 40 cm</p>
          |
          <p>Peso: 60 mg</p>
        </div>
        <button>{{product.price}} $</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    product: Object,
    isShow: Boolean
  },
  methods : {
    emitToParent () {
      this.$emit('childToParent', !this.isShow)
    }
  }
}
</script>

<style scope>
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
  }

  .card {
    position: fixed;
    width: 60vw;
    background-color: var(--main-light-color);
    display: flex;
    flex-direction: column;
    border-radius: 15px;
  }

  .card img {
    max-width: 300px;
    height: auto;
    object-fit: contain;
    image-rendering: optimizeQuality;
    align-self: center;
  }

  .card .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }

  .card .content > h1 {
    align-self: center;
  }

  .card .content > p {
    align-self: center;
    margin-bottom: 30px;
  }

  .card .content > .metrics {
    align-self: center;
    display: flex;
    flex-wrap: wrap;
  }

  .card .content .metrics p {
    margin-left: 5px;
    margin-right: 5px;
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

  .card .content > button::before {
    content: "";
    font-size: 0px;
    font-weight: bold;
    position: absolute;
    cursor: pointer;
    transition: .3s;
  }

  .card .content > button:hover:before {
    content: "Comprar ?";
    font-size: 34px;
    font-weight: bold;
    transform: rotate(-10deg) translate(-5px);
    background-color: black;
    color: white;
    padding: 2px;
  }
</style>