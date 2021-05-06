<template>
  <div class="product-line">
    <img src="" alt="">
    <div class="product-data">
      <div>
        <h3>Mochila</h3>
        <span>99.99$</span>
      </div>
      <p>Ceci est la description.</p>
    </div>
    <div class="counter">
      <button @click="decrementCounter()">-</button>
      <span>{{this.counter}}</span>
      <button @click="incrementCounter()">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCartLine',
  created () {
    
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter(){
      this.counter++;
    },
    decrementCounter(){
      if (this.counter == 0) {
        this.counter = 0;
      } else {
        this.counter--;
      }
    }
  },
}
</script>

<style scoped>
.product-line {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    display: flex;
    align-content: center;
  }

  .product-line img{
    flex: 1;
    background-color: rgb(98, 224, 136);
    min-width: 150px;
    height: 100%;
  }

  .product-data {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 20px;
  }

  .product-data > div {
    display: flex;
    align-items: center;

    padding-top: 10px;
    padding-bottom: 10px;
  }

  .product-data > div > h3{
    font-size: 1.4rem;
    margin: 0;
  }

  .product-data > div > span{
    font-size: 1.2rem;
    margin-left: 10px;
  }

  .counter {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .counter button{
    width: 30px;
    height: 30px;
    padding: 0px;
    text-align: center;
    margin: 5px;
  }

  .counter span {
    font-size: 1.5rem;
  }
</style>