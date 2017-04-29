
const assert = require( "assert" );
const kein = require( "./kein.js" );

//assert.equal( kein( "toString", null ), true, "should be true" );

assert.equal( kein( "toString", NaN ), true, "should be true" );

assert.equal( kein( "toString", undefined ), true, "should be true" );

assert.equal( kein( "toString", 123 ), true, "should be true" );

assert.equal( kein( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be true" );

assert.equal( kein( "property", { "property": "value" } ), true, "should be true" );

console.log( "ok" );
