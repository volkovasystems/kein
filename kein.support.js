"use strict";var _getOwnPropertySymbols=require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2=_interopRequireDefault(_getOwnPropertySymbols);var _getOwnPropertyNames=require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2=_interopRequireDefault(_getOwnPropertyNames);var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*;
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/kein.git",
			"test": "kein-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Checks if key exists on the entity.

		This is a deep checking, meaning, it will also check if the key exists by being inherited.

		Note that the key can exists even if the value is undefined.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"fnamed": "fnamed",
			"portel": "portel",
			"zelf": "zelf"
		}
	@end-include
*/

var falzy=require("falzy");
var fnamed=require("fnamed");
var portel=require("portel");
var zelf=require("zelf");

var kein=function kein(key,entity){
/*;
		@meta-configuration:
			{
				"key:required": [
					"number",
					"string",
					"symbol"
				],
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

if(
falzy(key)||
typeof key!="number"&&typeof key!="string"&&(typeof key==="undefined"?"undefined":(0,_typeof3.default)(key))!="symbol")
{
throw new Error("invalid key");
}

/*;
		@note:
			If the entity is falsy or non-object then we should wrap it with
				portel. Now for cases of null and undefined this is ok
				because the purpose is to check if the specific key
				exists for a particular dynamic object, chances of this
				being used to check for meta-methods and its intended usage
				is rare or may not have adverse effect on the entire logic
				of any systems.
		@end-note
	*/
if(
arguments.length==2&&(
falzy(entity)||(typeof entity==="undefined"?"undefined":(0,_typeof3.default)(entity))!="object"&&typeof entity!="function"))
{
entity=portel(entity);
}

/*;
		@note:
			If key is only given then it will check in the global.
		@end-note
	*/
if(arguments.length==1){
entity=zelf(this);
}

/*;
		@note:
			Beyond this, the entity must be non-falsy.
		@end-note
	*/
return(
key in entity||
typeof entity.hasOwnProperty=="function"&&entity.hasOwnProperty(key)||
(0,_getOwnPropertyNames2.default)(entity).some(function(property){return property===key;})||
(typeof key==="undefined"?"undefined":(0,_typeof3.default)(key))=="symbol"&&
(0,_getOwnPropertySymbols2.default)(entity).some(function(property){return property===key;})||
function(){
for(var property in entity){
if(property===key||fnamed(entity[property],key)){
return true;
}
}

return false;
}());

};

module.exports=kein;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlaW4uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJmbmFtZWQiLCJwb3J0ZWwiLCJ6ZWxmIiwia2VpbiIsImtleSIsImVudGl0eSIsIkVycm9yIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJzb21lIiwicHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoieWdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxHQUFNQSxPQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLEdBQU1DLFFBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsR0FBTUUsUUFBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxHQUFNRyxNQUFPSCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxHQUFNSSxNQUFPLFFBQVNBLEtBQVQsQ0FBZUMsR0FBZixDQUFvQkMsTUFBcEIsQ0FBNEI7QUFDeEM7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNDUCxNQUFPTSxHQUFQO0FBQ0ssTUFBT0EsSUFBUCxFQUFjLFFBQWQsRUFBMEIsTUFBT0EsSUFBUCxFQUFjLFFBQXhDLEVBQW9ELE9BQU9BLElBQVAsZ0RBQU9BLEdBQVAsSUFBYyxRQUZ4RTtBQUdDO0FBQ0EsS0FBTSxJQUFJRSxNQUFKLENBQVcsYUFBWCxDQUFOO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV0E7QUFDQ0MsVUFBVUMsTUFBVixFQUFvQixDQUFwQjtBQUNLVixNQUFPTyxNQUFQLEdBQXFCLE9BQU9BLE9BQVAsZ0RBQU9BLE1BQVAsSUFBaUIsUUFBakIsRUFBNkIsTUFBT0EsT0FBUCxFQUFpQixVQUR4RSxDQUREO0FBR0M7QUFDQUEsT0FBU0osT0FBUUksTUFBUixDQUFUO0FBQ0E7O0FBRUQ7Ozs7O0FBS0EsR0FBSUUsVUFBVUMsTUFBVixFQUFvQixDQUF4QixDQUEyQjtBQUMxQkgsT0FBU0gsS0FBTSxJQUFOLENBQVQ7QUFDQTs7QUFFRDs7Ozs7QUFLQTtBQUNDRSxNQUFPQyxPQUFQO0FBQ0ssTUFBT0EsUUFBT0ksY0FBZCxFQUFnQyxVQUFoQyxFQUE4Q0osT0FBT0ksY0FBUCxDQUF1QkwsR0FBdkIsQ0FEbkQ7QUFFRyxrQ0FBNEJDLE1BQTVCLEVBQXFDSyxJQUFyQyxDQUEyQyxTQUFFQyxRQUFGLFFBQWtCQSxZQUFhUCxHQUEvQixFQUEzQyxDQUZIO0FBR0ssT0FBT0EsSUFBUCxnREFBT0EsR0FBUCxJQUFjLFFBQWQ7QUFDRCxvQ0FBOEJDLE1BQTlCLEVBQXVDSyxJQUF2QyxDQUE2QyxTQUFFQyxRQUFGLFFBQWtCQSxZQUFhUCxHQUEvQixFQUE3QyxDQUpKO0FBS0ssVUFBTztBQUNYLElBQUssR0FBSU8sU0FBVCxHQUFxQk4sT0FBckIsQ0FBNkI7QUFDNUIsR0FBSU0sV0FBYVAsR0FBYixFQUFvQkosT0FBUUssT0FBUU0sUUFBUixDQUFSLENBQTRCUCxHQUE1QixDQUF4QixDQUEyRDtBQUMxRCxNQUFPLEtBQVA7QUFDQTtBQUNEOztBQUVELE1BQU8sTUFBUDtBQUNBLENBUkUsRUFOSjs7QUFnQkEsQ0FyRUQ7O0FBdUVBUSxPQUFPQyxPQUFQLENBQWlCVixJQUFqQiIsImZpbGUiOiJrZWluLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia2VpblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2Vpbi9rZWluLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJrZWluLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImtlaW5cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rZWluLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwia2Vpbi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrcyBpZiBrZXkgZXhpc3RzIG9uIHRoZSBlbnRpdHkuXG5cblx0XHRUaGlzIGlzIGEgZGVlcCBjaGVja2luZywgbWVhbmluZywgaXQgd2lsbCBhbHNvIGNoZWNrIGlmIHRoZSBrZXkgZXhpc3RzIGJ5IGJlaW5nIGluaGVyaXRlZC5cblxuXHRcdE5vdGUgdGhhdCB0aGUga2V5IGNhbiBleGlzdHMgZXZlbiBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZuYW1lZFwiOiBcImZuYW1lZFwiLFxuXHRcdFx0XCJwb3J0ZWxcIjogXCJwb3J0ZWxcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZm5hbWVkID0gcmVxdWlyZSggXCJmbmFtZWRcIiApO1xuY29uc3QgcG9ydGVsID0gcmVxdWlyZSggXCJwb3J0ZWxcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGtlaW4gPSBmdW5jdGlvbiBrZWluKCBrZXksIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImtleTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKFxuXHRcdGZhbHp5KCBrZXkgKVxuXHRcdHx8ICggdHlwZW9mIGtleSAhPSBcIm51bWJlclwiICYmIHR5cGVvZiBrZXkgIT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Yga2V5ICE9IFwic3ltYm9sXCIgKVxuXHQpe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGtleVwiICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdElmIHRoZSBlbnRpdHkgaXMgZmFsc3kgb3Igbm9uLW9iamVjdCB0aGVuIHdlIHNob3VsZCB3cmFwIGl0IHdpdGhcblx0XHRcdFx0cG9ydGVsLiBOb3cgZm9yIGNhc2VzIG9mIG51bGwgYW5kIHVuZGVmaW5lZCB0aGlzIGlzIG9rXG5cdFx0XHRcdGJlY2F1c2UgdGhlIHB1cnBvc2UgaXMgdG8gY2hlY2sgaWYgdGhlIHNwZWNpZmljIGtleVxuXHRcdFx0XHRleGlzdHMgZm9yIGEgcGFydGljdWxhciBkeW5hbWljIG9iamVjdCwgY2hhbmNlcyBvZiB0aGlzXG5cdFx0XHRcdGJlaW5nIHVzZWQgdG8gY2hlY2sgZm9yIG1ldGEtbWV0aG9kcyBhbmQgaXRzIGludGVuZGVkIHVzYWdlXG5cdFx0XHRcdGlzIHJhcmUgb3IgbWF5IG5vdCBoYXZlIGFkdmVyc2UgZWZmZWN0IG9uIHRoZSBlbnRpcmUgbG9naWNcblx0XHRcdFx0b2YgYW55IHN5c3RlbXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKFxuXHRcdGFyZ3VtZW50cy5sZW5ndGggPT0gMlxuXHRcdCYmICggZmFsenkoIGVudGl0eSApIHx8ICggdHlwZW9mIGVudGl0eSAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRpdHkgIT0gXCJmdW5jdGlvblwiICkgKVxuXHQpe1xuXHRcdGVudGl0eSA9IHBvcnRlbCggZW50aXR5ICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdElmIGtleSBpcyBvbmx5IGdpdmVuIHRoZW4gaXQgd2lsbCBjaGVjayBpbiB0aGUgZ2xvYmFsLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAxICl7XG5cdFx0ZW50aXR5ID0gemVsZiggdGhpcyApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRCZXlvbmQgdGhpcywgdGhlIGVudGl0eSBtdXN0IGJlIG5vbi1mYWxzeS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0cmV0dXJuIChcblx0XHRrZXkgaW4gZW50aXR5XG5cdFx0fHwgKCB0eXBlb2YgZW50aXR5Lmhhc093blByb3BlcnR5ID09IFwiZnVuY3Rpb25cIiAmJiBlbnRpdHkuaGFzT3duUHJvcGVydHkoIGtleSApIClcblx0XHR8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5ICkuc29tZSggKCBwcm9wZXJ0eSApID0+ICggcHJvcGVydHkgPT09IGtleSApIClcblx0XHR8fCAoIHR5cGVvZiBrZXkgPT0gXCJzeW1ib2xcIlxuXHRcdFx0JiYgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyggZW50aXR5ICkuc29tZSggKCBwcm9wZXJ0eSApID0+ICggcHJvcGVydHkgPT09IGtleSApICkgKVxuXHRcdHx8ICggKCApID0+IHtcblx0XHRcdGZvciggbGV0IHByb3BlcnR5IGluIGVudGl0eSApe1xuXHRcdFx0XHRpZiggcHJvcGVydHkgPT09IGtleSB8fCBmbmFtZWQoIGVudGl0eVsgcHJvcGVydHkgXSwga2V5ICkgKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSApKCApXG5cdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtlaW47XG4iXX0=
//# sourceMappingURL=kein.support.js.map
