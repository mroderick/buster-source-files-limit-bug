/*jslint white:true */
/*global
	module,
	require
*/
var config = module.exports;
config["Browser"] = {

	rootPath : "./",

	environment : "browser",

	sources : [
		'src/buster-limit-test/*.js'
	],

	tests : [
		"test/test-assert-true.js"
	]
};

// config["Node"] = {

// 	rootPath : "./",

// 	environment : "node",

// 	sources : [
// 		'src/buster-limit-test/*.js'
// 	],

// 	tests : [
// 		"test/test-assert-true.js"
// 	]
// };