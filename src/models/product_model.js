export default class ProductModel {
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
    static get(){
        return ProductModel.products;
    }
    static products=[
        new ProductModel(1, "Product 1", 10.99, "Description for Product 1", "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"),
        new ProductModel(2, "Product 2", 19.99, "Description for Product 2", "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"),
        new ProductModel(3, "Product 3", 5.99, "Description for Product 3", "image3.jpg"),
        new ProductModel(4, "Product 4", 15.99, "Description for Product 4", "image4.jpg"),
        new ProductModel(5, "Product 5", 8.99, "Description for Product 5", "image5.jpg")
    ];
}