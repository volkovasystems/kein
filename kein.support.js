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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlaW4uanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwicHJvdHlwZSIsImtlaW4iLCJlbnRpdHkiLCJrZXkiLCJPQkpFQ1QiLCJGVU5DVElPTiIsIkVycm9yIiwidW5kZWZpbmVkIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eSIsImVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUUsT0FBTyxTQUFTQSxJQUFULENBQWVDLE1BQWYsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUksQ0FBQ0gsUUFBU0UsTUFBVCxFQUFpQkUsTUFBakIsRUFBeUJDLFFBQXpCLENBQUQsSUFBd0NQLE1BQU9JLE1BQVAsQ0FBNUMsRUFBNkQ7QUFDNUQsUUFBTSxJQUFJSSxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlSLE1BQU9LLEdBQVAsQ0FBSixFQUFrQjtBQUNqQixRQUFNLElBQUlHLEtBQUosQ0FBVyxhQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBV0gsT0FBT0QsTUFBVCxJQUNSQSxPQUFRQyxHQUFSLE1BQWtCSSxTQURWLElBRVJMLE9BQU9NLGNBQVAsQ0FBdUJMLEdBQXZCLENBRlEsSUFHTixZQUFPO0FBQ1IsUUFBSyxJQUFJTSxRQUFULElBQXFCUCxNQUFyQixFQUE2QjtBQUM1QixRQUFJTyxhQUFhTixHQUFqQixFQUFzQjtBQUNyQixZQUFPLElBQVA7QUFDQTtBQUNEOztBQUVELFVBQU8sS0FBUDtBQUNBLEdBUkQsRUFIRDtBQWFBLEVBZEQsQ0FjQyxPQUFPTyxLQUFQLEVBQWM7QUFDZCxRQUFNLElBQUlKLEtBQUosMEJBQW1DSSxNQUFNQyxLQUF6QyxDQUFOO0FBQ0E7QUFDRCxDQTFDRDs7QUE0Q0FDLE9BQU9DLE9BQVAsR0FBaUJaLElBQWpCIiwiZmlsZSI6ImtlaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImtlaW5cIixcblx0XHRcdFwicGF0aFwiOiBcImtlaW4va2Vpbi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwia2Vpbi5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJrZWluXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2Vpbi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImtlaW4tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDaGVjayBpZiBrZXkgZXhpc3RzIG9uIHRoZSBlbnRpdHkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5cbmNvbnN0IGtlaW4gPSBmdW5jdGlvbiBrZWluKCBlbnRpdHksIGtleSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJrZXk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggZW50aXR5LCBPQkpFQ1QsIEZVTkNUSU9OICkgfHwgZmFsenkoIGVudGl0eSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSgga2V5ICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBrZXlcIiApO1xuXHR9XG5cblx0dHJ5e1xuXHRcdHJldHVybiAoICgga2V5IGluIGVudGl0eSApIHx8XG5cdFx0XHRlbnRpdHlbIGtleSBdICE9PSB1bmRlZmluZWQgfHxcblx0XHRcdGVudGl0eS5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgfHxcblx0XHRcdCggKCApID0+IHtcblx0XHRcdFx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gZW50aXR5ICl7XG5cdFx0XHRcdFx0aWYoIHByb3BlcnR5ID09PSBrZXkgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gKSggKSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBlcnJvciBjaGVja2luZyBrZXksICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2VpbjtcbiJdfQ==
