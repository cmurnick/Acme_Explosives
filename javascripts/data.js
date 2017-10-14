"use strict";

const dom = require('./dom');

const AllProducts = [];



const categoriesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./data/categories.json').done((data1) => {
			resolve(data1.categories);
			console.log(data1);
		}).fail((error1) => {
			reject(error1);
		});
	});	
};

const typesJSON = () => {
	return new Promise(function(resolve, reject) {
		$.ajax('./data/types.json').done((data2) => {
			resolve(data2.types);
		}).fail((error2) => {
			reject(error2);
		});
	});	
};

const productsJSON = () => {
	return new Promise(function(resolve, reject) {
		$.ajax('./data/products.json').done((data3) => {
			resolve(data3.products);
		}).fail((error3) => {
			reject(error3);
		});
	});	
};

const productGetter = () => {
	Promise.all([categoriesJSON(), typesJSON(), productsJSON]).then(function(results) {
		console.log("results from promise.all", results);
		results.forEach((result) => {
			result.forEach((products) => {
				AllProducts.push(products);
				console.log("result", result);
			});
		});
// 		// makeProducts();
// 	});.catch((error) => {
// 		console.log("error from Promise.all", error);
// 	});
// };


const initializer = () => {
	productGetter();
};



module.exports = {initializer};





