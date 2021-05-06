export default class CategoryModel {
  constructor(category){
    this.id = category.id;
    this.name = category.name;
    this.description = category.description;
    this.type = category.type;
    this.subCategories = [];
    this.products = [];
  }
}