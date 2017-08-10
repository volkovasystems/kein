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

const assert = require( "should" );

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
			//: @ignore:
			assert.equal( kein( "toString", ( ) => { } ), true );
			//: @end-ignore
		} );
	} );

	describe( "`kein( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			assert.equal( kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
			//: @end-ignore
		} );
	} );

	describe( "`kein( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( kein( "property", { "property": "value" } ), true );
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

} );
//: @end-bridge
