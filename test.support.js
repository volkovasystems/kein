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
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
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
*/var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _defineProperty2=require("babel-runtime/helpers/defineProperty");var _defineProperty3=_interopRequireDefault(_defineProperty2);var _for=require("babel-runtime/core-js/symbol/for");var _for2=_interopRequireDefault(_for);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

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

describe("`kein( 'toString', Infinity )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",Infinity),true);
});
});

describe("`kein( 'toString', true )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",true),true);
});
});

describe("`kein( 'toString', Array )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",Array),true);
});
});

describe("`kein( 'toString', 'helloworld' )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString","helloworld"),true);
});
});

describe("`kein( 'toString', Symbol.for( 'hi' ) )`",function(){
it("should be equal to true",function(){
assert.equal(kein("toString",(0,_for2.default)("hi")),true);
});
});

describe("`kein( 'length', [ 1, 2, 3 ] )`",function(){
it("should be equal to true",function(){
assert.equal(kein("length",[1,2,3]),true);
});
});

describe("`kein( 'name', function yeah( ){ } )`",function(){
it("should be equal to true",function(){
assert.equal(kein("name",function yeah(){}),true);
});
});

describe("`kein with class instance`",function(){
it("should be equal to true",function(){var

Orange=function(){
function Orange(){(0,_classCallCheck3.default)(this,Orange);
this.color="orange";
}(0,_createClass3.default)(Orange,[{key:"getColor",value:function getColor()
{
return"orange";
}}]);return Orange;}();


var orange=new Orange();

assert.equal(kein("constructor",orange),true);

});
});

describe("`kein( 'property', { } )`",function(){
it("should be equal to false",function(){
assert.equal(kein("property",{}),false);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwia2VpbiIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIk5hTiIsInVuZGVmaW5lZCIsIkluZmluaXR5IiwiQXJyYXkiLCJ5ZWFoIiwiT3JhbmdlIiwiY29sb3IiLCJvcmFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLEdBQU1BLFFBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxNQUFWLENBQWtCLFVBQU87O0FBRXhCQSxTQUFVLDJCQUFWLENBQXVDLFVBQU87QUFDN0NDLEdBQUkseUJBQUosQ0FBK0IsVUFBTztBQUNyQ0osT0FBT0ssS0FBUCxDQUFjSCxLQUFNLFVBQU4sQ0FBa0JJLEdBQWxCLENBQWQsQ0FBdUMsSUFBdkM7QUFDQSxDQUZEO0FBR0EsQ0FKRDs7QUFNQUgsU0FBVSxpQ0FBVixDQUE2QyxVQUFPO0FBQ25EQyxHQUFJLHlCQUFKLENBQStCLFVBQU87QUFDckNKLE9BQU9LLEtBQVAsQ0FBY0gsS0FBTSxVQUFOLENBQWtCSyxTQUFsQixDQUFkLENBQTZDLElBQTdDO0FBQ0EsQ0FGRDtBQUdBLENBSkQ7O0FBTUFKLFNBQVUsMkJBQVYsQ0FBdUMsVUFBTztBQUM3Q0MsR0FBSSx5QkFBSixDQUErQixVQUFPO0FBQ3JDSixPQUFPSyxLQUFQLENBQWNILEtBQU0sVUFBTixDQUFrQixHQUFsQixDQUFkLENBQXVDLElBQXZDO0FBQ0EsQ0FGRDtBQUdBLENBSkQ7O0FBTUFDLFNBQVUsa0NBQVYsQ0FBOEMsVUFBTztBQUNwREMsR0FBSSx5QkFBSixDQUErQixVQUFPO0FBQ3JDO0FBQ0FKLE9BQU9LLEtBQVAsQ0FBY0gsS0FBTSxVQUFOLENBQWtCLFVBQU8s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QWNILEtBQU0sVUFBTixDQUFrQixFQUFsQixDQUFkLENBQXVDLEtBQXZDO0FBQ0EsQ0FGRDtBQUdBLENBSkQ7O0FBTUEsQ0E3R0Q7QUE4R0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrZWluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJrZWluL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2Vpbi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwicGF0aFwiOiBcInBhdGhcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcIi4va2Vpbi5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwia2VpblwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBrZWluKCBcInRvU3RyaW5nXCIsIE5hTiApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwidG9TdHJpbmdcIiwgdW5kZWZpbmVkICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgMTIzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJ0b1N0cmluZ1wiLCAxMjMgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBrZWluKCBcInRvU3RyaW5nXCIsICggKSA9PiB7IH0gKSwgdHJ1ZSApO1xuXHRcdFx0Ly86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSwgeyBbIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSBdOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApLCB7IFsgU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICkgXTogXCJ2YWx1ZVwiIH0gKSwgdHJ1ZSApO1xuXHRcdFx0Ly86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwidG9TdHJpbmdcIiwgSW5maW5pdHkgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJ0b1N0cmluZ1wiLCB0cnVlICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgQXJyYXkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBrZWluKCBcInRvU3RyaW5nXCIsIEFycmF5ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgJ2hlbGxvd29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJ0b1N0cmluZ1wiLCBcImhlbGxvd29ybGRcIiApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIFN5bWJvbC5mb3IoICdoaScgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwidG9TdHJpbmdcIiwgU3ltYm9sLmZvciggXCJoaVwiICkgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAnbGVuZ3RoJywgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBrZWluKCBcImxlbmd0aFwiLCBbIDEsIDIsIDMgXSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICduYW1lJywgZnVuY3Rpb24geWVhaCggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwibmFtZVwiLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiB3aXRoIGNsYXNzIGluc3RhbmNlYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIE9yYW5nZSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApe1xuXHRcdFx0XHRcdHRoaXMuY29sb3IgPSBcIm9yYW5nZVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGdldENvbG9yKCApe1xuXHRcdFx0XHRcdHJldHVybiBcIm9yYW5nZVwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvcmFuZ2UgPSBuZXcgT3JhbmdlKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtlaW4oIFwiY29uc3RydWN0b3JcIiwgb3JhbmdlICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAncHJvcGVydHknLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCgga2VpbiggXCJwcm9wZXJ0eVwiLCB7IH0gKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
