
const assert = require( "assert" );
const kein = require( "./kein.js" );

assert.equal( kein( "toString", NaN ), true, "should be equal to true" );

assert.equal( kein( "toString", undefined ), true, "should be equal to true" );

assert.equal( kein( "toString", 123 ), true, "should be equal to true" );

assert.equal( kein( "toString", ( ) => { } ), true, "should be equal to true" );

/* The result of these tests have changed to false

assert.equal( kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be equal to true" );

assert.equal( kein( "property", { "property": "value" } ), true, "should be equal to true" );

*/

console.log( "ok" );
