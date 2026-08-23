// const express = require('express');
import express from 'express';
import path from 'path';
// import ProductModel from "./src/models/product_model.js";
import product_Controller from './src/controllers/product-controller.js';





const server = express();
const productController = new product_Controller();


server.get('/', productController.getproduct);
// {
//     let products = ProductModel.get();
// console.log(products);
// res.sendFile(
//         path.join(path.resolve(), 'src/views/products.html')
//     );

//
// });
server.use(express.static('src/views'));
//set view engine and views directory

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src/views'));


// server.get('/', (req,res)=>{
//     return res.send('Welcome to Inventory App');
// });

server.listen(3300,()=>{
    console.log('Server is running on port 3300');
});