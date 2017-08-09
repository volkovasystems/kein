
const assert = require( "assert" );
const kein = require( "./kein.js" );

assert.equal( kein( "toString", NaN ), true, "should be equal to true" );

assert.equal( kein( "toString", undefined ), true, "should be equal to true" );

assert.equal( kein( "toString", 123 ), true, "should be equal to true" );

assert.equal( kein( "toString", ( ) => { } ), true, "should be equal to true" );

assert.equal( kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be equal to true" );

assert.equal( kein( "property", { "property": "value" } ), true, "should be equal to true" );

let Hello = function Hello( ){ };

Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

assert.equal( kein( Symbol.for( "extensive" ), Hello ), true, "should be equal to true" );

console.log( "ok" );
