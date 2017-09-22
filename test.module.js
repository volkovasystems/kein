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

const assert = require( "should/as-function" );

//: @server:
const kein = require( "./kein.js" );
//: @end-server

//: @client:
const kein = require( "./kein.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "kein", ( ) => {

	describe( "`kein( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", NaN ), true );
		} );
	} );

	describe( "`kein( 'toString', undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", undefined ), true );
		} );
	} );

	describe( "`kein( 'toString', 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", 123 ), true );
		} );
	} );

	describe( "`kein( 'toString', ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", ( ) => { } ), true );
		} );
	} );

	describe( "`kein( 1, { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( 1, { 0: "hello", 1: "world" } ), true );
		} );
	} );

	describe( "`kein( 1, [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( 1, [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`kein( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
		} );
	} );

	describe( "`kein( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "property", { "property": "value" } ), true );
		} );
	} );

	describe( "`kein( 'toString', Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", Infinity ), true );
		} );
	} );

	describe( "`kein( 'toString', true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", true ), true );
		} );
	} );

	describe( "`kein( 'toString', Array )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", Array ), true );
		} );
	} );

	describe( "`kein( 'toString', 'helloworld' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", "helloworld" ), true );
		} );
	} );

	describe( "`kein( 'toString', Symbol.for( 'hi' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", Symbol.for( "hi" ) ), true );
		} );
	} );

	describe( "`kein with symbol type as key and function as entity`", ( ) => {
		it( "should be equal to true", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( kein( Symbol.for( "extensive" ), Hello ), true );
		} );
	} );

	describe( "`kein( 'length', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "length", [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`kein( 'name', function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "name", function yeah( ){ } ), true );
		} );
	} );

	describe( "`kein with class instance`", ( ) => {
		it( "should be equal to true", ( ) => {

			class Orange {
				constructor( ){
					this.color = "orange";
				}
				getColor( ){
					return "orange";
				}
			}

			let orange = new Orange( );

			assert.equal( kein( "constructor", orange ), true );

		} );
	} );

	describe( "`kein( 'property', { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( kein( "property", { } ), false );
		} );
	} );

} );
//: @end-server

//: @client:
describe( "kein", ( ) => {

	describe( "`kein( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", NaN ), true );
		} );
	} );

	describe( "`kein( 'toString', undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", undefined ), true );
		} );
	} );

	describe( "`kein( 'toString', 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", 123 ), true );
		} );
	} );

	describe( "`kein( 'toString', ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", ( ) => { } ), true );
		} );
	} );

	describe( "`kein( 1, { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( 1, { 0: "hello", 1: "world" } ), true );
		} );
	} );

	describe( "`kein( 1, [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( 1, [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`kein( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
		} );
	} );

	describe( "`kein( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "property", { "property": "value" } ), true );
		} );
	} );

	describe( "`kein( 'toString', Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", Infinity ), true );
		} );
	} );

	describe( "`kein( 'toString', true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", true ), true );
		} );
	} );

	describe( "`kein( 'toString', Array )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", Array ), true );
		} );
	} );

	describe( "`kein( 'toString', 'helloworld' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", "helloworld" ), true );
		} );
	} );

	describe( "`kein( 'toString', Symbol.for( 'hi' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "toString", Symbol.for( "hi" ) ), true );
		} );
	} );

	describe( "`kein with symbol type as key and function as entity`", ( ) => {
		it( "should be equal to true", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( kein( Symbol.for( "extensive" ), Hello ), true );
		} );
	} );

	describe( "`kein( 'length', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "length", [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`kein( 'name', function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "name", function yeah( ){ } ), true );
		} );
	} );

	describe( "`kein with class instance`", ( ) => {
		it( "should be equal to true", ( ) => {

			class Orange {
				constructor( ){
					this.color = "orange";
				}
				getColor( ){
					return "orange";
				}
			}

			let orange = new Orange( );

			assert.equal( kein( "constructor", orange ), true );

		} );
	} );

	describe( "`kein( 'property', { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( kein( "property", { } ), false );
		} );
	} );

} );
//: @end-client

//: @bridge:
describe( "kein", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`kein( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", NaN );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`kein( 'toString', undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", undefined );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`kein( 'toString', 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", 123 );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`kein( 'toString', ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", ( ) => { } );
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

	describe( "`kein( 1, { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( 1, { 0: "hello", 1: "world" } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 1, [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( 1, [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } );
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

	describe( "`kein with symbol type as key and function as entity`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

					return kein( Symbol.for( "extensive" ), Hello );
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

	describe( "`kein( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "property", { "property": "value" } );
				}

			).value;

			assert.equal( result, true );
		} );
	} );


	describe( "`kein( 'toString', Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", Infinity );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`kein( 'toString', true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", true );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 'toString', Array )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", Array );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 'toString', 'helloworld' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", "helloworld" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 'toString', Symbol.for( 'hi' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "toString", Symbol.for( "hi" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 'length', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "length", [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 'name', function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "name", function yeah( ){ } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`kein with class instance`", ( ) => {
		it( "should be equal to true", ( ) => {
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
			assert.equal( result, true );

		} );
	} );

	describe( "`kein( 'property', { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return kein( "property", { } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

} );
//: @end-bridge
