import path from 'path';
import ProductModel from "../models/product_model.js";

export default class product_Controller {
    getproduct(req, res) {
        const products = ProductModel.get();
        return res.render('products', { products });
    }
}
