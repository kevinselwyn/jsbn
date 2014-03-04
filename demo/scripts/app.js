/*globals require, requirejs*/

(function () {
	"use strict";

	requirejs.config({
		baseUrl: ".",
		paths: {
			"jsbn": "../src/jsbn",
			"demo": "scripts/demo"
		}
	});

	require(["jsbn", "demo"], function (jsbn, demo) {
		demo.init();
	});
}());