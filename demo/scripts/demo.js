/*globals define, document, jsbn, module, require, window*/

(function (jsbn) {
	"use strict";

	var demo = {
		vars: {
			isbn: {},
			operation: [],
			result: {},
			submit: {}
		},
		setup: function () {
			var isbn = document.getElementById("isbn"),
				operation = [],
				result = document.getElementById("result"),
				submit = document.getElementById("submit"),
				input = document.getElementsByTagName("input"),
				i = 0,
				l = 0;

			for (i = 0, l = input.length; i < l; i += 1) {
				if (input[i].type === "radio") {
					operation.push(input[i]);
				}
			}

			this.vars = {
				isbn: isbn,
				operation: operation,
				result: result,
				submit: submit
			};

			return true;
		},
		events: function () {
			var submit = this.vars.submit;

			submit.parentNode.onsubmit = this.submit;

			return this;
		},
		submit: function (e) {
			var $this = demo,
				isbn = $this.vars.isbn,
				operation = "",
				operations = $this.vars.operation,
				result = $this.vars.result,
				i = 0,
				l = 0;

			e.preventDefault();

			if (!isbn.value) {
				return false;
			}

			for (i = 0, l = operations.length; i < l; i += 1) {
				if (operations[i].checked) {
					operation = operations[i];
					i = l;
				}
			}

			result.value = jsbn[operation.value](isbn.value).toString();

			return false;
		},
		init: function () {
			if (!this.setup()) {
				return false;
			}

			this.events();

			return this;
		}
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
		module.exports = demo;
	} else {
		window.demo = demo;

		if (typeof define === "function" && define.amd) {
			define("demo", [], function () {
				return demo;
			});
		}
	}
}(jsbn));