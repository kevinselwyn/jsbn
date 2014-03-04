/*globals exports, require*/
/*jslint node: true*/

(function (jsbn) {
	"use strict";

	/*
	 * ISBN: 0-306-40615-2 and 978-0-306-40615-7
	 * Book: Error-Correction Coding for Digital Communications
	 *
	 * ISBN: 978-0-345-91743-0
	 * Book: The Lord of the Rings: The Fellowship of the Ring
	 */

	exports.clean = function (test) {
		test.strictEqual(jsbn.clean("0-306-40615-2"), "0306406152");
		test.strictEqual(jsbn.clean("0-306-40615"), "030640615");
		test.done();
	};

	exports.check10 = function (test) {
		test.strictEqual(jsbn.check10("0-306-40615-2"), true);
		test.strictEqual(jsbn.check10("0-306-40615-7"), false);
		test.strictEqual(jsbn.check10("0-306-40615"), false);
		test.done();
	};

	exports.checkDigit10 = function (test) {
		test.strictEqual(jsbn.checkDigit10("0-306-40615"), "2");
		test.strictEqual(jsbn.checkDigit10("0-306-4061"), false);
		test.done();
	};

	exports.check13 = function (test) {
		test.strictEqual(jsbn.check13("978-0-306-40615-7"), true);
		test.strictEqual(jsbn.check13("978-0-306-40615-2"), false);
		test.strictEqual(jsbn.check13("978-0-306-40615"), false);

		test.strictEqual(jsbn.check13("978-0-345-91743-0"), true);
		test.done();
	};

	exports.checkDigit13 = function (test) {
		test.strictEqual(jsbn.checkDigit13("978-0-306-40615"), "7");
		test.strictEqual(jsbn.checkDigit13("978-0-306-4061"), false);

		test.strictEqual(jsbn.checkDigit13("978-0-345-91743"), "0");
		test.done();
	};

	exports.convert = function (test) {
		test.strictEqual(jsbn.convert("0-306-40615-2"), "978-0-306-40615-7");
		test.strictEqual(jsbn.convert("0-306-40615-2", "xx-xx-xx-xx-xx-xx-x"), "97-80-30-64-06-15-7");
		test.strictEqual(jsbn.convert("0-306-40615"), false);
		test.done();
	};
}(require("../src/jsbn")));