<template>
  <div class="main-screen">
    <div class="left-sidebar">
      <ul v-for="category in categories" v-bind:key="category">
        <li class="main-category">
          <p>{{ category.name }}</p>
          <ul v-for="subCategory in category.items" v-bind:key="subCategory">
            <li class="sub-category">
              <a href="">{{ subCategory.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="glry">
      <div class="glry-header">
        <h1 id="glry-title">Mochilas</h1>
        <h4 id="glry-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          pariatur vel, dicta consectetur quaerat voluptate officia magnam
          laudantium facere consequuntur, animi, ipsam maxime dolorem quia.
          Ducimus maxime consectetur provident quis.
        </h4>
      </div>
      <hr />
      <div class="glry-content">
        <div class="glry-card">
          <img
            src="https://sevellia.com/media/image_vendor/cache/image/1800x/p/1/p1060594_1.jpg"
            alt=""
            srcset=""
          />
          <div class="glry-card-data">
            <p id="p-name">Product name</p>
            <p id="p-price">99.99$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    categories: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-screen {
  position: absolute;
  display: flex;
  flex-flow: row;
  width: calc(100vw - 1vh);
  height: calc(100vh - 4.75vh);
  z-index: 0;
  padding: 0px;
  margin: 0px;
}

.left-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2vh;
  margin-bottom: 2vh;
  overflow-y: auto;
  max-width: 300px;
  min-width: fit-content;
  height: auto;
  padding-right: 30px;
}

.left-sidebar .main-category > p {
  font-weight: 800;
  font-size: 1.15em;
}

.left-sidebar .sub-category {
  margin-top: 10px;
}

.left-sidebar .sub-category > a {
  font-size: 1em;
}

.glry {
  flex: 4;
  width: 100%;
  background-color: var(--main-light-color);
  overflow-y: auto;
  padding: 10px;
}

.glry .glry-header {
  background-image: url("https://i.pinimg.com/originals/6e/00/16/6e0016c174b767455aeeb1e43066f008.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 15vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
}

.glry .glry-content {
  display: flex;
  flex-direction: row;
}

.glry .glry-content .glry-card {
  max-width: 300px;
  padding: 0;
}

.glry .glry-content .glry-card > img {
  width: 100%;
  height: auto;
  object-fit: contain;
  image-rendering: optimizeQuality;
  box-shadow: 0px 0px 5px grey;
  border-radius: 20px;
}

.glry .glry-content .glry-card > .glry-card-data {
  text-align: center;
  padding: 4px;
}

.glry .glry-content .glry-card > .glry-card-data > #p-name {
  font-size: 18px;
  font-weight: 800;
}

.glry .glry-content .glry-card > .glry-card-data > #p-price {
  letter-spacing: 1px;
}
</style>