<template>
  <div class="container">
    <div class="card">

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    product: Object
  },
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
    width: 60vw;
    height: 60vh;
    background-color: var(--main-light-color);
    border-radius: 15px;
    display: flex;
  }

  .card img {
    
  }
</style>