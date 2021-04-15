<template>
  <div class="navbar">
    <div class="label">
      <a href="/"><span>Mochillax</span></a>
    </div>
    <div class="left">
      <ul v-for="link in links" v-bind:key="link">
        <li>
          <a href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="right">
      <a href="">
        <i><font-awesome-icon :icon="['fas', 'shopping-bag']" /></i>
        <p>Mi orden</p>
      </a>
      <a href="">
        <i><font-awesome-icon :icon="['fas', 'user-circle']" /></i>
        <p>Mi cuenta</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  box-shadow: 0px 0px 5px grey;
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
