"use strict";

const data = require('./data');
const dom = require('./dom');

var outputDiv = $('#chosen');

var domString = function (product) {
    var domStrang = '';
        domStrang += `<div>`;
        domStrang +=    `<h1>${data.products.type.catName}</h1>`;
        domStrang += `</div>`;
    printToDom(domStrang);
};

var printToDom = function(strang) {
    outputDiv.append(strang);
};


module.exports = {};
