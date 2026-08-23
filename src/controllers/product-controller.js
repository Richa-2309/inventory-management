import path from 'path';
import ProductModel from "../models/product_model.js";
export default class product_Controller{
    getproduct(req,res){
       let products = ProductModel.get();
      console.log(products);
      res.render('products', { products: products });
        // return res.sendFile(path.join(path.resolve(),'src','views','products.html'))
    }

}