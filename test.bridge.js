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
			"assert": "should/as-function",
			"kein": "kein",
			"path": "path"
		}
	@end-include
*/

var assert=require("should/as-function");





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

describe("`kein with symbol type as key and function as entity`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

					return kein( Symbol.for( "extensive" ), Hello );
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


describe("`kein( 'toString', Infinity )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("toString",Infinity);
}).

value;

assert.equal(result,true);

});
});


describe("`kein( 'toString', true )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("toString",true);
}).

value;

assert.equal(result,true);

});
});

describe("`kein( 'toString', Array )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("toString",Array);
}).

value;

assert.equal(result,true);

});
});

describe("`kein( 'toString', 'helloworld' )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){

return kein("toString","helloworld");

}).

value;

assert.equal(result,true);

});
});

describe("`kein( 'toString', Symbol.for( 'hi' ) )`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", Symbol.for( "hi" ) );
				}

			).value;
			//: @end-ignore
assert.equal(result,true);

});
});

describe("`kein( 'length', [ 1, 2, 3 ] )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("length",[1,2,3]);
}).

value;

assert.equal(result,true);

});
});

describe("`kein( 'name', function yeah( ){ } )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("name",function yeah(){});
}).

value;

assert.equal(result,true);

});
});

describe("`kein with class instance`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class Orange {
						constructor( ){
							this.color = "orange";
						}
						getColor( ){
							return "orange";
						}
					}

					let orange = new Orange( );

					return kein( "constructor", orange );

				}

			).value;
			//: @end-ignore
assert.equal(result,true);

});
});

describe("`kein( 'property', { } )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return kein("property",{});
}).

value;

assert.equal(result,false);

});
});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImtlaW4iLCJOYU4iLCJ2YWx1ZSIsImVxdWFsIiwidW5kZWZpbmVkIiwiSW5maW5pdHkiLCJBcnJheSIsInllYWgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLEdBQU1BLFFBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7QUFNQTtBQUNBRSxTQUFVLE1BQVYsQ0FBa0IsVUFBTzs7QUFFeEIsR0FBSUMscUJBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsQ0FBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFNBQVUsMkJBQVYsQ0FBdUMsVUFBTztBQUM3Q0ksR0FBSSx5QkFBSixDQUErQixVQUFPOztBQUVyQyxHQUFJQyxRQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLFVBQVc7QUFDVixNQUFPQyxNQUFNLFVBQU4sQ0FBa0JDLEdBQWxCLENBQVA7QUFDQSxDQUpXOztBQU1YQyxLQU5GOztBQVFBZCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQVhEO0FBWUEsQ0FiRDs7QUFlQUwsU0FBVSxpQ0FBVixDQUE2QyxVQUFPO0FBQ25ESSxHQUFJLHlCQUFKLENBQStCLFVBQU87O0FBRXJDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosVUFBVztBQUNWLE1BQU9DLE1BQU0sVUFBTixDQUFrQkksU0FBbEIsQ0FBUDtBQUNBLENBSlc7O0FBTVhGLEtBTkY7O0FBUUFkLE9BQU9lLEtBQVAsQ0FBY1AsTUFBZCxDQUFzQixJQUF0QjtBQUNBLENBWEQ7QUFZQSxDQWJEOztBQWVBTCxTQUFVLDJCQUFWLENBQXVDLFVBQU87QUFDN0NJLEdBQUkseUJBQUosQ0FBK0IsVUFBTzs7QUFFckMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsTUFBTSxVQUFOLENBQWtCLEdBQWxCLENBQVA7QUFDQSxDQUpXOztBQU1YRSxLQU5GOztBQVFBZCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQVhEO0FBWUEsQ0FiRDs7QUFlQUwsU0FBVSxrQ0FBVixDQUE4QyxVQUFPO0FBQ3BESSxHQUFJLHlCQUFKLENBQStCLFVBQU87QUFDckM7QUFDSDs7Ozs7Ozs7O0FBU0E7O0FBRUdQLE9BQU9lLEtBQVAsQ0FBY1AsTUFBZCxDQUFzQixJQUF0QjtBQUNBLENBZEQ7QUFlQSxDQWhCRDs7QUFrQkFMLFNBQVUsK0VBQVYsQ0FBMkYsVUFBTztBQUNqR0ksR0FBSSx5QkFBSixDQUErQixVQUFPO0FBQ3JDO0FBQ0g7Ozs7Ozs7OztBQVNBOztBQUVHUCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQWREO0FBZUEsQ0FoQkQ7O0FBa0JBTCxTQUFVLHVEQUFWLENBQW1FLFVBQU87QUFDekVJLEdBQUkseUJBQUosQ0FBK0IsVUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTs7QUFFR1AsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCO0FBQ0EsQ0FqQkQ7QUFrQkEsQ0FuQkQ7O0FBcUJBTCxTQUFVLCtDQUFWLENBQTJELFVBQU87QUFDakVJLEdBQUkseUJBQUosQ0FBK0IsVUFBTzs7QUFFckMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsTUFBTSxVQUFOLENBQWtCLENBQUUsV0FBWSxPQUFkLENBQWxCLENBQVA7QUFDQSxDQUpXOztBQU1YRSxLQU5GOztBQVFBZCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQVhEO0FBWUEsQ0FiRDs7O0FBZ0JBTCxTQUFVLGdDQUFWLENBQTRDLFVBQU87QUFDbERJLEdBQUkseUJBQUosQ0FBK0IsVUFBTzs7QUFFckMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsTUFBTSxVQUFOLENBQWtCSyxRQUFsQixDQUFQO0FBQ0EsQ0FKVzs7QUFNWEgsS0FORjs7QUFRQWQsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCOztBQUVBLENBWkQ7QUFhQSxDQWREOzs7QUFpQkFMLFNBQVUsNEJBQVYsQ0FBd0MsVUFBTztBQUM5Q0ksR0FBSSx5QkFBSixDQUErQixVQUFPOztBQUVyQyxHQUFJQyxRQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLFVBQVc7QUFDVixNQUFPQyxNQUFNLFVBQU4sQ0FBa0IsSUFBbEIsQ0FBUDtBQUNBLENBSlc7O0FBTVhFLEtBTkY7O0FBUUFkLE9BQU9lLEtBQVAsQ0FBY1AsTUFBZCxDQUFzQixJQUF0Qjs7QUFFQSxDQVpEO0FBYUEsQ0FkRDs7QUFnQkFMLFNBQVUsNkJBQVYsQ0FBeUMsVUFBTztBQUMvQ0ksR0FBSSx5QkFBSixDQUErQixVQUFPOztBQUVyQyxHQUFJQyxRQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLFVBQVc7QUFDVixNQUFPQyxNQUFNLFVBQU4sQ0FBa0JNLEtBQWxCLENBQVA7QUFDQSxDQUpXOztBQU1YSixLQU5GOztBQVFBZCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7O0FBRUEsQ0FaRDtBQWFBLENBZEQ7O0FBZ0JBTCxTQUFVLG9DQUFWLENBQWdELFVBQU87QUFDdERJLEdBQUkseUJBQUosQ0FBK0IsVUFBTzs7QUFFckMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXOztBQUVWLE1BQU9DLE1BQU0sVUFBTixDQUFrQixZQUFsQixDQUFQOztBQUVBLENBTlc7O0FBUVhFLEtBUkY7O0FBVUFkLE9BQU9lLEtBQVAsQ0FBY1AsTUFBZCxDQUFzQixJQUF0Qjs7QUFFQSxDQWREO0FBZUEsQ0FoQkQ7O0FBa0JBTCxTQUFVLDBDQUFWLENBQXNELFVBQU87QUFDNURJLEdBQUkseUJBQUosQ0FBK0IsVUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7O0FBRUEsQ0FkRDtBQWVBLENBaEJEOztBQWtCQUwsU0FBVSxpQ0FBVixDQUE2QyxVQUFPO0FBQ25ESSxHQUFJLHlCQUFKLENBQStCLFVBQU87O0FBRXJDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosVUFBVztBQUNWLE1BQU9DLE1BQU0sUUFBTixDQUFnQixDQUFFLENBQUYsQ0FBSyxDQUFMLENBQVEsQ0FBUixDQUFoQixDQUFQO0FBQ0EsQ0FKVzs7QUFNWEUsS0FORjs7QUFRQWQsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCOztBQUVBLENBWkQ7QUFhQSxDQWREOztBQWdCQUwsU0FBVSx1Q0FBVixDQUFtRCxVQUFPO0FBQ3pESSxHQUFJLHlCQUFKLENBQStCLFVBQU87O0FBRXJDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosVUFBVztBQUNWLE1BQU9DLE1BQU0sTUFBTixDQUFjLFFBQVNPLEtBQVQsRUFBZ0IsQ0FBRyxDQUFqQyxDQUFQO0FBQ0EsQ0FKVzs7QUFNWEwsS0FORjs7QUFRQWQsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLElBQXRCOztBQUVBLENBWkQ7QUFhQSxDQWREOztBQWdCQUwsU0FBVSw0QkFBVixDQUF3QyxVQUFPO0FBQzlDSSxHQUFJLHlCQUFKLENBQStCLFVBQU87QUFDckM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNHUCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsSUFBdEI7O0FBRUEsQ0EzQkQ7QUE0QkEsQ0E3QkQ7O0FBK0JBTCxTQUFVLDJCQUFWLENBQXVDLFVBQU87QUFDN0NJLEdBQUksMEJBQUosQ0FBZ0MsVUFBTzs7QUFFdEMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsTUFBTSxVQUFOLENBQWtCLEVBQWxCLENBQVA7QUFDQSxDQUpXOztBQU1YRSxLQU5GOztBQVFBZCxPQUFPZSxLQUFQLENBQWNQLE1BQWQsQ0FBc0IsS0FBdEI7O0FBRUEsQ0FaRDtBQWFBLENBZEQ7O0FBZ0JBLENBOVJEO0FBK1JBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrZWluXCIsXG5cdFx0XHRcInBhdGhcIjogXCJrZWluL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2Vpbi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwicGF0aFwiOiBcInBhdGhcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwia2VpblwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBrZWluKCBcInRvU3RyaW5nXCIsIE5hTiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4ga2VpbiggXCJ0b1N0cmluZ1wiLCB1bmRlZmluZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAndG9TdHJpbmcnLCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwidG9TdHJpbmdcIiwgMTIzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwidG9TdHJpbmdcIiwgKCApID0+IHsgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSwgeyBbIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSBdOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBrZWluKCBTeW1ib2wuZm9yKCBcInByb3BlcnR5XCIgKSwgeyBbIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApIF06IFwidmFsdWVcIiB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiB3aXRoIHN5bWJvbCB0eXBlIGFzIGtleSBhbmQgZnVuY3Rpb24gYXMgZW50aXR5YFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IEhlbGxvID0gZnVuY3Rpb24gSGVsbG8oICl7IH07XG5cdFx0XHRcdFx0SGVsbG9bIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSBdID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSwgSGVsbG8gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAncHJvcGVydHknLCB7ICdwcm9wZXJ0eSc6ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4ga2VpbiggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIEluZmluaXR5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBrZWluKCBcInRvU3RyaW5nXCIsIEluZmluaXR5ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwidG9TdHJpbmdcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2VpbiggJ3RvU3RyaW5nJywgQXJyYXkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwidG9TdHJpbmdcIiwgQXJyYXkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsICdoZWxsb3dvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdHJldHVybiBrZWluKCBcInRvU3RyaW5nXCIsIFwiaGVsbG93b3JsZFwiICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICd0b1N0cmluZycsIFN5bWJvbC5mb3IoICdoaScgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwidG9TdHJpbmdcIiwgU3ltYm9sLmZvciggXCJoaVwiICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAnbGVuZ3RoJywgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwibGVuZ3RoXCIsIFsgMSwgMiwgMyBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluKCAnbmFtZScsIGZ1bmN0aW9uIHllYWgoICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwibmFtZVwiLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBrZWluIHdpdGggY2xhc3MgaW5zdGFuY2VgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGNsYXNzIE9yYW5nZSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5jb2xvciA9IFwib3JhbmdlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRnZXRDb2xvciggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwib3JhbmdlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IG9yYW5nZSA9IG5ldyBPcmFuZ2UoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4ga2VpbiggXCJjb25zdHJ1Y3RvclwiLCBvcmFuZ2UgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGtlaW4oICdwcm9wZXJ0eScsIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGtlaW4oIFwicHJvcGVydHlcIiwgeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
