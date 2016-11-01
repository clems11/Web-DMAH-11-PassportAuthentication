'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require( `express` );
const mongoose = require( `mongoose` );
const json = require( `body-parser` ).json;





/*------------------------------------*\
  #MY DEPENDENCIES
\*------------------------------------*/

const config = require( `./config.js` );





/*------------------------------------*\
  #APP
\*------------------------------------*/

const app = express();

app.use( express.static( `./src` ) ) ;
app.use( json() );







/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

// Code here





/*------------------------------------*\
  #DATABASE
\*------------------------------------*/

mongoose.connect( 'mongodb://localhost:27017/PassportAuth', ( err, res ) => {
	if ( err ) console.log( 'Error connecting to database' )
	else console.log( 'Auth database now connected!' )
} );





/*------------------------------------*\
  #ROUTES
\*------------------------------------*/

// Code here




/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen( config.port, () => {
	console.log( 'Auth server listening on port', config.port );
} );
