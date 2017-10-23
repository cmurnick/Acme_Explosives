"use strict";

const data = require('./data');


var outputDiv = $('#chosen');

var printToDom = function(strang) {
    outputDiv.append(strang);
};

var domString = function (product) {
	console.log("domString");
    var domStrang = '';
        domStrang += "<div>";
        domString += "<p>"" + "hello world" + "</p>";
        // domStrang +=    `<h1>${data.product[0].map(product => `${product.id}`)}</h1>`;
        domStrang += "</div>";

        console.log(domStrang);
    printToDom(domStrang);
};



var test = function() {
	var str = "<h1>Hello</h1>";
	outputDiv.append(str);
};

// test();

module.exports = {domString, test};
