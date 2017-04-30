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
		Checks if key exists on the entity.

		This is a deep checking, meaning, it will also check if the key exists by being inherited.

		Note that the key can exists even if the value is undefined.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"fnamed": "fnamed",
			"portel": "portel",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

const falzy = require( "falzy" );
const fnamed = require( "fnamed" );
const portel = require( "portel" );
const protype = require( "protype" );
const zelf = require( "zelf" );

const kein = function kein( key, entity ){
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

	if( falzy( key ) || !protype( key, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid key" );
	}

	if( arguments.length == 2 ){
		entity = portel( entity );

	}else{
		entity = zelf( this );
	}

	try{
		return ( ( key in entity ) ||

			( protype( entity.hasOwnProperty, FUNCTION ) && entity.hasOwnProperty( key ) ) ||

			Object.getOwnPropertyNames( entity ).some( ( property ) => ( property === key ) ) ||

			( protype( key, SYMBOL ) && Object.getOwnPropertySymbols( entity )
				.some( ( property ) => ( property === key ) ) ) ||

			( ( ) => {
				for( let property in entity ){
					if( property === key || fnamed( entity[ property ], key ) ){
						return true;
					}
				}

				return false;
			} )( ) );

	}catch( error ){
		throw new Error( `cannot check key, ${ error.stack }` );
	}
};

module.exports = kein;
