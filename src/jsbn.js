/*globals console, define, module, window*/
/*jslint regexp: true*/

(function () {
	"use strict";

	var jsbn = {
		error: function (msg) {
			console.error(msg);

			return false;
		},
		clean: function (num) {
			return num.replace(/[^0-9]/g, "");
		},
		check10: function (num) {
			var sum = 0,
				i = 0;

			num = this.clean(num);

			if (num.length !== 10) {
				return this.error("Incorrect number of digits");
			}

			for (i = 10; i > 0; i -= 1) {
				sum += parseInt(num[10 - i], 10) * i;
			}

			return (sum % 11) === 0;
		},
		checkDigit10: function (num) {
			var sum = 0,
				i = 0;

			num = this.clean(num);

			if (num.length !== 9) {
				return this.error("Incorrect number of digits");
			}

			for (i = 10; i > 1; i -= 1) {
				sum += parseInt(num[10 - i], 10) * i;
			}

			return ((11 - (sum % 11)) % 10).toString();
		},
		check13: function (num) {
			var sum = 0,
				mult = 0,
				i = 0;

			num = this.clean(num);

			if (num.length !== 13) {
				return this.error("Incorrect number of digits");
			}

			for (i = 0; i < 13; i += 1) {
				mult = (i % 2) ? 3 : 1;

				sum += parseInt(num[i], 10) * mult;
			}

			return (sum % 10) === 0;
		},
		checkDigit13: function (num) {
			var sum = 0,
				mult = 0,
				i = 0;

			num = this.clean(num);

			if (num.length !== 12) {
				return this.error("Incorrect number of digits");
			}

			for (i = 0; i < 12; i += 1) {
				mult = (i % 2) ? 3 : 1;

				sum += parseInt(num[i], 10) * mult;
			}

			return ((10 - (sum % 10)) % 10).toString();
		},
		convert: function (num, format) {
			var i = 0,
				l = 0;

			num = this.clean(num);

			if (num.length !== 10) {
				return this.error("Incorrect number of digits");
			}

			num = "978" + num.substring(0, 9);
			num += this.checkDigit13(num);

			format = format || "xxx-x-xxx-xxxxx-x";

			for (i = 0, l = num.length; i < l; i += 1) {
				format = format.replace("x", num[i]);
			}

			return format;
		}
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
		module.exports = jsbn;
	} else {
		window.jsbn = jsbn;

		if (typeof define === "function" && define.amd) {
			define("jsbn", [], function () {
				return jsbn;
			});
		}
	}
}());