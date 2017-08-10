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
*/var _defineProperty2=require("babel-runtime/helpers/defineProperty");var _defineProperty3=_interopRequireDefault(_defineProperty2);var _for=require("babel-runtime/core-js/symbol/for");var _for2=_interopRequireDefault(_for);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var assert=require("should");



//: @client:
var kein=require("./kein.support.js");
//: @end-client





//: @client:
describe("kein",function(){

describe("`kein( 'toString', NaN )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",NaN),true);
});
});

describe("`kein( 'toString', undefined )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",undefined),true);
});
});

describe("`kein( 'toString', 123 )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",123),true);
});
});

describe("`kein( 'toString', ( ) => { } )`",function(){
it("should be equal to true",function(){
//: @ignore:
assert.equal(kein("toString",function(){}),true);
//: @end-ignore
});
});

describe("`kein( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`",function(){
it("should be equal to true",function(){
//: @ignore:
assert.equal(kein((0,_for2.default)("property"),(0,_defineProperty3.default)({},(0,_for2.default)("property"),"value")),true);
//: @end-ignore
});
});

describe("`kein( 'property', { 'property': 'value' } )`",function(){
it("should be equal to true",function(){
assert.equal(kein("property",{"property":"value"}),true);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwia2VpbiIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIk5hTiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLEdBQU1BLFFBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxNQUFWLENBQWtCLFVBQU87O0FBRXhCQSxTQUFVLDJCQUFWLENBQXVDLFVBQU87QUFDN0NDLEdBQUkseUJBQUosQ0FBK0IsVUFBTztBQUNyQ0osT0FBT0ssS0FBUCxDQUFjSCxLQUFNLFVBQU4sQ0FBa0JJLEdBQWxCLENBQWQsQ0FBdUMsSUFBdkM7QUFDQSxDQUZEO0FBR0EsQ0FKRDs7QUFNQUgsU0FBVSxpQ0FBVixDQUE2QyxVQUFPO0FBQ25EQyxHQUFJLHlCQUFKLENBQStCLFVBQU87QUFDckNKLE9BQU9LLEtBQVAsQ0FBY0gsS0FBTSxVQUFOLENBQWtCSyxTQUFsQixDQUFkLENBQTZDLElBQTdDO0FBQ0EsQ0FGRDtBQUdBLENBSkQ7O0FBTUFKLFNBQVUsMkJBQVYsQ0FBdUMsVUFBTztBQUM3Q0MsR0FBSSx5QkFBSixDQUErQixVQUFPO0FBQ3JDSixPQUFPSyxLQUFQLENBQWNILEtBQU0sVUFBTixDQUFrQixHQUFsQixDQUFkLENBQXVDLElBQXZDO0FBQ0EsQ0FGRDtBQUdBLENBSkQ7O0FBTUFDLFNBQVUsa0NBQVYsQ0FBOEMsVUFBTztBQUNwREMsR0FBSSx5QkFBSixDQUErQixVQUFPO0FBQ3JDO0FBQ0FKLE9BQU9LLEtBQVAsQ0FBY0gsS0FBTSxVQUFOLENBQWtCLFVBQU8sQ0FBRyxDQUE1QixDQUFkLENBQThDLElBQTlDO0FBQ0E7QUFDQSxDQUpEO0FBS0EsQ0FORDs7QUFRQUMsU0FBVSwrRUFBVixDQUEyRixVQUFPO0FBQ2pHQyxHQUFJLHlCQUFKLENBQStCLFVBQU87QUFDckM7QUFDQUosT0FBT0ssS0FBUCxDQUFjSCxLQUFNLGtCQUFZLFVBQVosQ0FBTixpQ0FBb0Msa0JBQVksVUFBWixDQUFwQyxDQUFnRSxPQUFoRSxFQUFkLENBQTJGLElBQTNGO0FBQ0E7QUFDQSxDQUpEO0FBS0EsQ0FORDs7QUFRQUMsU0FBVSwrQ0FBVixDQUEyRCxVQUFPO0FBQ2pFQyxHQUFJLHlCQUFKLENBQStCLFVBQU87QUFDckNKLE9BQU9LLEtBQVAsQ0FBY0gsS0FBTSxVQUFOLENBQWtCLENBQUUsV0FBWSxPQUFkLENBQWxCLENBQWQsQ0FBMkQsSUFBM0Q7QUFDQSxDQUZEO0FBR0EsQ0FKRDs7QUFNQSxDQTFDRDtBQTJDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImtlaW5cIixcblx0XHRcdFwicGF0aFwiOiBcImtlaW4vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2tlaW4uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCIuL2tlaW4uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImtlaW5cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJ0b1N0cmluZ1wiLCBOYU4gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBrZWluKCBcInRvU3RyaW5nXCIsIHVuZGVmaW5lZCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwidG9TdHJpbmdcIiwgMTIzICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJ0b1N0cmluZ1wiLCAoICkgPT4geyB9ICksIHRydWUgKTtcblx0XHRcdC8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCBTeW1ib2wuZm9yKCAncHJvcGVydHknICksIHsgWyBTeW1ib2wuZm9yKCAncHJvcGVydHknICkgXTogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBrZWluKCBTeW1ib2wuZm9yKCBcInByb3BlcnR5XCIgKSwgeyBbIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApIF06IFwidmFsdWVcIiB9ICksIHRydWUgKTtcblx0XHRcdC8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAncHJvcGVydHknLCB7ICdwcm9wZXJ0eSc6ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwicHJvcGVydHlcIiwgeyBcInByb3BlcnR5XCI6IFwidmFsdWVcIiB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
