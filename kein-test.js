"use strict";

const kein = require( "./kein.js" );

console.log( kein( "name", { "name": "simple" } ) );

console.log( kein( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "simple" } ) );

console.log( kein( "toString", 123 ) );
