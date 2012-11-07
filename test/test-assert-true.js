(function( global ){
	"use strict";

	var buster = global.buster || require("buster");

	buster.testCase('test-assert-true', {
		"should be true" : function(){
			assert( true );
		}
	});
}(this));