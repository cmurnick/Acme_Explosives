"use strict";

const dom = require('./dom');


const products = [];
const categories = [];
const types = [];



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


// PROMISE _ CORRECT WAY
var productGetter = function() {
	categoriesJSON().then(function(results) {
		results.forEach(function(result){
			categories.push(result);
		});	
		return typesJSON();

	}).then(function(results2) {
		results2.forEach(function(type){
			categories.forEach(function(category){
				if(type.category === category.id) {
					type.catName = category.name;
				}
		});

		types.push(results2);
		console.log(results2);
	});
		return productsJSON();

	}).then(function(results3) {
		results3.forEach(function(product){
		});

		products.push(results3);
		console.log("products", results3);

	});	
		// makeProducts();
};





const initializer = function() {
	productGetter();
};

// const makeProducts = () => {
// 	products.forEach((product) => {
// 		console.log(product);
// 		dom(product);
// 	});
// };

// var getProducts = () => {
// 	return products;
// };


module.exports = {initializer};





