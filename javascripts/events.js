"use strict";

const data = require('./data');
const dom = require('./dom');

$('#workout').click((event) => {
	// dom.domString();
	console.log(event);
		data.initializer(event);
		

});





module.exports = {};