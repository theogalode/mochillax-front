export default class ProductModel {
  constructor(product){
    this.id = product.id;
    this.name = product.name;
    this.image_url = product.image_url;
    this.description = product.description;
    this.price = product.price;
    this.localization = product.localization;
    this.isPublished = product.isPublished;
    this.isSelled = product.isSelled;
  }
}