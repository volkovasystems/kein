"use strict";

const kein = require( "./kein.js" );

console.log( kein( { "name": "simple" }, "name" ) );

console.log( kein( { [ Symbol.for( "hello" ) ]: "simple" }, Symbol.for( "hello" ) ) );
