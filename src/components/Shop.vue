<template>
  <div class="main-screen">
    <div class="left-sidebar">
      <ul v-for="category in categories" v-bind:key="category.id">
        <li class="main-category">
          <p>{{ category.name }}</p>
          <ul v-for="subCategory in category.items" v-bind:key="subCategory.id">
            <li class="sub-category">
              <a href="#" @click="setCategory(subCategory)">{{ subCategory.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="right-side">
      <Gallery v-if="currentCategory.items" v-bind:category="currentCategory"/>
    </div>
  </div>
</template>

<script>
import Gallery from './Gallery.vue';
export default {
  data () {
    return {
      currentCategory: {},
      currentSubCategory: {}
    }
  },
  components: { Gallery },
  name: "Shop",
  props: {
    categories: Array,
  },
    methods: {
    setCategory (category) { 
      this.currentCategory = category;
    },
    setSubCategory (subCategory) { 
      this.currentSubCategory = subCategory;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-screen {
  position: absolute;
  display: flex;
  flex-flow: row;
  width: calc(100vw - 0.6vw);
  height: calc(100vh - 8vh);
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

.right-side {
  flex: 4;
}

</style>