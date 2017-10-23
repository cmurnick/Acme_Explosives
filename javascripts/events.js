"use strict";

const data = require('./data');
const dom = require('./dom');

$('#workout').click((event) => {
	console.log(event);
		data.initializer(event);
			dom.domString();


});





module.exports = {};