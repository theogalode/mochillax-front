<template>
  <div class="main-screen">
    <div class="left-sidebar">
      <ul v-for="category in sortedArray" v-bind:key="category.id">
        <li class="main-category">
          <p @click="setCurrentCategory(category)" >{{ category.name }}</p>
          <ul v-for="subCategory in category.subCategories" v-bind:key="subCategory.id" >
            <li class="sub-category">
              <a href="#" @click="setCurrentCategory(subCategory)">{{ subCategory.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="right-side">
      <Gallery v-if="isSelected" v-bind:category="currentCategory" :key="currentCategory"/>
      <div class="default" v-else>
        <img src="../assets/img/sunflower.svg" alt="">
        <p>¡ Elige una categoría para empezar el Shopping !</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import Gallery from './Gallery.vue';
import CategoryService from "../services/category.service"
import CategoryModel from "../models/category.model"

export default {
  data () {
    return {
      currentCategory: {},
      categories: [],
      isSelected: false
    }
  },
  async mounted() {
    CategoryService.getAll()
    .then((cat) => {
      if (cat) {
        for(let i = 0; i < cat.length; i++) {
          const element = new CategoryModel(cat[i]);
          CategoryService.getAllSubCategoriesByIdCategory(element.id)
          .then((result) => {
            element.subCategories = result;
            this.categories.push(element);
          }).catch((err) => {
            console.log(err); 
          })
          .finally(()=>{
            this.categories.sort((a, b) => a.name > b.name );
          });
        }
      }
    })
    .catch((err) => { console.log(err); });
  },
  components: { Gallery },
  name: "Shop",
  props: {
  },
    methods: {
      setCurrentCategory (category) { 
        this.currentCategory = category;
        this.isSelected = true;
      },
      getCurrentCategory() {
        return this.currentCategory;
      },
      setIsSelected() {
        this.isSelected == !this.isSelected;
      }
  },
  computed: {
    sortedArray() {
      let sortedCategories = this.categories;
      
      sortedCategories = sortedCategories.sort((a,b) => {
        let fa = a.id, fb = b.id;
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
      return sortedCategories;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-screen {
  position: absolute;
  display: inline-flex;
  flex-flow: row;
  width: calc(100vw - 8px);
  height: calc(100vh - 60px);
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
  align-content: stretch;
}

.left-sidebar .main-category > p {
  font-weight: 800;
  font-size: 1.15em;
  cursor: pointer;
}

.left-sidebar .sub-category {
  margin-top: 10px;
}

.left-sidebar .sub-category > a {
  font-size: 1em;
}

.right-side {
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.right-side .default {
  margin-top: 2vh;
  text-align: center;
}

.right-side .default img {
  max-width: 175px;
  transform: rotate(0deg);
  margin-bottom: 20px;
  animation: 10s linear 0s infinite turn-flower;
}

@keyframes turn-flower { from { transform: rotate(0deg); } to { transform: rotate(360deg); }  }


</style>