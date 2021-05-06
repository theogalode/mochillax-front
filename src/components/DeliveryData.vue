<template>
  <div class="container" v-if="!isShow">
    <div class="card">
      <div class="back"></div>
      <div class="close" @click="emitToParent()"></div>
      <div class="content">
        <h1>Finalizar su pago</h1>
        <form class="my-form" action="" method="post">
          <div class="left">
            <h3>Detalles para el pedido</h3>
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Apellido">
            <input type="text" placeholder="Correo">
            <input type="text" placeholder="Dirreción">
            <input type="text" placeholder="Ciudad">
            <input type="text" placeholder="Zip Code">
            <input type="text" placeholder="Celular">
            <input type="text" placeholder="Información usual">
          </div>
          <div class="right">
            <h3>Entrega</h3>
            <div>
              <input type="radio" id="express" name="drone" value="1" checked>
              <label for="express">Express Domicilio</label>
            </div>

            <div>
              <input type="radio" id="normal" name="drone" value="2">
              <label for="normal">Domicilio normal</label>
            </div>

            <div>
              <input type="radio" id="tienda" name="drone" value="3">
              <label for="tienda">En la tienda</label>
            </div>

            <h3>Metodo de pago</h3>
            <select name="payement-select" id="payement-select">
              <option value="">--Por favor elige un opciòn--</option>
              <option value="1">Tarjeta bancarial</option>
              <option value="2">Paypal</option>
            </select>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DeliveryData",
  components: {
  },
  data() {
    return {
      total: 40,
    }
  },
  created () {

  },
  computed: {

  },
  watch: {

  },
  props: {

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

  .my-form {
    display: inline-flex;
    flex-direction: row;
  }

  input {
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: black 3px solid;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    max-width: 250px;
  }

  input::placeholder {
    font-size: 14px;
    font-weight: bold;
    
  }

  .left {
    flex:1;
    display: flex;
    flex-direction: column;
    
  }

  .right {
    flex:1;
  }
</style>