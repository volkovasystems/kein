"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "kein",
              			"path": "kein/kein.js",
              			"file": "kein.js",
              			"module": "kein",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/kein.git",
              			"test": "kein-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Check if key exists on the entity.
              
              		This is a deep checking, meaning, it will also check if the key exists by being inherited.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"protype": "protype"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var protype = require("protype");

var kein = function kein(entity, key) {
	/*;
                                       	@meta-configuration:
                                       		{
                                       			"entity:required": [
                                       				"object",
                                       				"function"
                                       			],
                                       			"key:required": [
                                       				"string",
                                       				"number",
                                       				"symbol"
                                       			]
                                       		}
                                       	@end-meta-configuration
                                       */

	if (falzy(entity) || !protype(entity, OBJECT + FUNCTION)) {
		throw new Error("invalid entity");
	}

	if (falzy(key) || !protype(key, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid key");
	}

	try {
		return key in entity ||
		entity[key] !== undefined ||
		protype(entity.hasOwnProperty, FUNCTION) && entity.hasOwnProperty(key) ||
		(0, _getOwnPropertyNames2.default)(entity).some(function (property) {return property === key;}) ||
		(0, _getOwnPropertySymbols2.default)(entity).some(function (property) {return property === key;}) ||
		function () {
			for (var property in entity) {
				if (property === key) {
					return true;
				}
			}

			return false;
		}();

	} catch (error) {
		throw new Error("error checking key, " + error.stack);
	}
};

module.exports = kein;

//# sourceMappingURL=kein.support.js.map