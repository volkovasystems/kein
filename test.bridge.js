"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "kein",
			"path": "kein/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/kein.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"kein": "kein",
			"path": "path"
		}
	@end-include
*/

var assert=require("should");





//: @bridge:
var path=require("path");
//: @end-bridge





//: @bridge:
describe("kein",function(){

var bridgeURL="file://"+path.resolve(__dirname,"bridge.html");

describe("`kein( 'toString', NaN )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("toString",NaN);
}).

value;

assert.equal(result,true);
});
});

describe("`kein( 'toString', undefined )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("toString",undefined);
}).

value;

assert.equal(result,true);
});
});

describe("`kein( 'toString', 123 )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("toString",123);
}).

value;

assert.equal(result,true);
});
});

describe("`kein( 'toString', ( ) => { } )`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", ( ) => { } );
				}

			).value;
			//: @end-ignore

assert.equal(result,true);
});
});

describe("`kein( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } );
				}

			).value;
			//: @end-ignore

assert.equal(result,true);
});
});

describe("`kein( 'property', { 'property': 'value' } )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("property",{"property":"value"});
}).

value;

assert.equal(result,true);
});
});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImtlaW4iLCJOYU4iLCJ2YWx1ZSIsImVxdWFsIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsR0FBTUEsUUFBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsR0FBTUMsTUFBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxNQUFWLENBQWtCLFVBQU87O0FBRXhCLEdBQUlDLHFCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLENBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxTQUFVLDJCQUFWLENBQXVDLFVBQU87QUFDN0NJLEdBQUkseUJBQUosQ0FBK0IsVUFBTzs7QUFFckMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsTUFBTSxVQUFOLENBQWtCQyxHQUFsQixDQUFQO0FBQ0EsQ0FKVzs7QUFNWEMsS0FORjs7QUFRQWQsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCO0FBQ0EsQ0FYRDtBQVlBLENBYkQ7O0FBZUFMLFNBQVUsaUNBQVYsQ0FBNkMsVUFBTztBQUNuREksR0FBSSx5QkFBSixDQUErQixVQUFPOztBQUVyQyxHQUFJQyxRQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLFVBQVc7QUFDVixNQUFPQyxNQUFNLFVBQU4sQ0FBa0JJLFNBQWxCLENBQVA7QUFDQSxDQUpXOztBQU1YRixLQU5GOztBQVFBZCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQVhEO0FBWUEsQ0FiRDs7QUFlQUwsU0FBVSwyQkFBVixDQUF1QyxVQUFPO0FBQzdDSSxHQUFJLHlCQUFKLENBQStCLFVBQU87O0FBRXJDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosVUFBVztBQUNWLE1BQU9DLE1BQU0sVUFBTixDQUFrQixHQUFsQixDQUFQO0FBQ0EsQ0FKVzs7QUFNWEUsS0FORjs7QUFRQWQsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCO0FBQ0EsQ0FYRDtBQVlBLENBYkQ7O0FBZUFMLFNBQVUsa0NBQVYsQ0FBOEMsVUFBTztBQUNwREksR0FBSSx5QkFBSixDQUErQixVQUFPO0FBQ3JDO0FBQ0g7Ozs7Ozs7OztBQVNBOztBQUVHUCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQWREO0FBZUEsQ0FoQkQ7O0FBa0JBTCxTQUFVLCtFQUFWLENBQTJGLFVBQU87QUFDakdJLEdBQUkseUJBQUosQ0FBK0IsVUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7QUFTQTs7QUFFR1AsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCO0FBQ0EsQ0FkRDtBQWVBLENBaEJEOztBQWtCQUwsU0FBVSwrQ0FBVixDQUEyRCxVQUFPO0FBQ2pFSSxHQUFJLHlCQUFKLENBQStCLFVBQU87O0FBRXJDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosVUFBVztBQUNWLE1BQU9DLE1BQU0sVUFBTixDQUFrQixDQUFFLFdBQVksT0FBZCxDQUFsQixDQUFQO0FBQ0EsQ0FKVzs7QUFNWEUsS0FORjs7QUFRQWQsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCO0FBQ0EsQ0FYRDtBQVlBLENBYkQ7O0FBZUEsQ0FwR0Q7QUFxR0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImtlaW5cIixcblx0XHRcdFwicGF0aFwiOiBcImtlaW4vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2tlaW4uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmRlc2NyaWJlKCBcImtlaW5cIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4ga2VpbiggXCJ0b1N0cmluZ1wiLCBOYU4gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwidG9TdHJpbmdcIiwgdW5kZWZpbmVkICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgMTIzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBrZWluKCBcInRvU3RyaW5nXCIsIDEyMyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBrZWluKCBcInRvU3RyaW5nXCIsICggKSA9PiB7IH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCBTeW1ib2wuZm9yKCAncHJvcGVydHknICksIHsgWyBTeW1ib2wuZm9yKCAncHJvcGVydHknICkgXTogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4ga2VpbiggU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICksIHsgWyBTeW1ib2wuZm9yKCBcInByb3BlcnR5XCIgKSBdOiBcInZhbHVlXCIgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBrZWluKCBcInByb3BlcnR5XCIsIHsgXCJwcm9wZXJ0eVwiOiBcInZhbHVlXCIgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
