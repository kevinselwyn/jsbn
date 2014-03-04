#jsbn

Utility for validating 10- and 13-digit ISBNs.

[Demo](http://kevinselwyn.com/jsbn/)

##Usage

Include the script in your document:

```html
<script src="dist/jsbn.min.js"></script>
```

If you are using a module loader like [RequireJS](http://requirejs.org), require the module:

```js
require(["dist/jsbn.min"], function (jsbn) {
	
});
```

##Functions

###jsbn.check10()

Validate a 10-digit ISBN

```js
jsbn.check10("0-306-40615-2");
// Returns true
```

###jsbn.checkDigit10()

Given 9 digits of an ISBN, it will calculate the final check digit

```js
jsbn.checkDigit10("0-306-40615");
// Returns "2"
```

###jsbn.check13()

Validate a 13-digit ISBN

```js
jsbn.check13("978-0-306-40615-7");
// Returns true
```

###jsbn.checkDigit13()

Given 12 digits of an ISBN, it will calculate the final check digit

```js
jsbn.checkDigit13("978-0-306-40615");
// Returns "7"
```

###jsbn.convert()

Converts a 10-digit ISBN to a 13-digit ISBN

```js
jsbn.convert("0-306-40615-2");
// Returns "978-0-306-40615-7"
```

You may also provide the `convert` function with a template for formatting the 13-digit ISBN. The default is "xxx-x-xxx-xxxxx-x"

```js
jsbn.convert("0-306-40615-2", "xxx-x-xxx-xxxxx-x");
// Returns "978-0-306-40615-7"

jsbn.convert("0-306-40615-2", "xxx-xxx-xxx-xxx-x");
// Returns "978-030-640-615-7"
```

##Testing

Test with [nodeunit](https://github.com/caolan/nodeunit):

```bash
nodeunit test/test.js
```