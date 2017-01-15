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
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/kein.git",
			"test": "kein-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if key exists on the entity.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"protype": "protype"
		}
	@end-include
*/

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

	if (!protype(entity, OBJECT, FUNCTION) || falzy(entity)) {
		throw new Error("invalid entity");
	}

	if (falzy(key)) {
		throw new Error("invalid key");
	}

	try {
		return key in entity || entity[key] !== undefined || entity.hasOwnProperty(key) || function () {
			for (property in entity) {
				if (property === key) {
					return true;
				}
			}

			return false;
		}();
	} catch (error) {
		throw new Error("error checking key, " + error);
	}
};

module.exports = kein;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlaW4uanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwicHJvdHlwZSIsImtlaW4iLCJlbnRpdHkiLCJrZXkiLCJPQkpFQ1QiLCJGVU5DVElPTiIsIkVycm9yIiwidW5kZWZpbmVkIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1FLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN4Qzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxLQUFJLENBQUNILFFBQVNFLE1BQVQsRUFBaUJFLE1BQWpCLEVBQXlCQyxRQUF6QixDQUFELElBQXdDUCxNQUFPSSxNQUFQLENBQTVDLEVBQTZEO0FBQzVELFFBQU0sSUFBSUksS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJUixNQUFPSyxHQUFQLENBQUosRUFBa0I7QUFDakIsUUFBTSxJQUFJRyxLQUFKLENBQVcsYUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBRztBQUNGLFNBQVdILE9BQU9ELE1BQVQsSUFDUkEsT0FBUUMsR0FBUixNQUFrQkksU0FEVixJQUVSTCxPQUFPTSxjQUFQLENBQXVCTCxHQUF2QixDQUZRLElBR04sWUFBTztBQUNSLFFBQUtNLFFBQUwsSUFBaUJQLE1BQWpCLEVBQXlCO0FBQ3hCLFFBQUlPLGFBQWFOLEdBQWpCLEVBQXNCO0FBQ3JCLFlBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTyxLQUFQO0FBQ0EsR0FSRCxFQUhEO0FBYUEsRUFkRCxDQWNDLE9BQU9PLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUosS0FBSiwwQkFBbUNJLEtBQW5DLENBQU47QUFDQTtBQUNELENBMUNEOztBQTRDQUMsT0FBT0MsT0FBUCxHQUFpQlgsSUFBakIiLCJmaWxlIjoia2Vpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia2VpblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2Vpbi9rZWluLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJrZWluLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImtlaW5cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2tlaW4uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrZWluLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2hlY2sgaWYga2V5IGV4aXN0cyBvbiB0aGUgZW50aXR5LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBrZWluID0gZnVuY3Rpb24ga2VpbiggZW50aXR5LCBrZXkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwia2V5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGVudGl0eSwgT0JKRUNULCBGVU5DVElPTiApIHx8IGZhbHp5KCBlbnRpdHkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGtleSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQga2V5XCIgKTtcblx0fVxuXG5cdHRyeXtcblx0XHRyZXR1cm4gKCAoIGtleSBpbiBlbnRpdHkgKSB8fFxuXHRcdFx0ZW50aXR5WyBrZXkgXSAhPT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRlbnRpdHkuaGFzT3duUHJvcGVydHkoIGtleSApIHx8XG5cdFx0XHQoICggKSA9PiB7XG5cdFx0XHRcdGZvciggcHJvcGVydHkgaW4gZW50aXR5ICl7XG5cdFx0XHRcdFx0aWYoIHByb3BlcnR5ID09PSBrZXkgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gKSggKSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBlcnJvciBjaGVja2luZyBrZXksICR7IGVycm9yIH1gICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2VpbjtcbiJdfQ==
