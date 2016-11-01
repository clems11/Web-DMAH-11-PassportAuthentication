'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require( `express` );
const mongoose = require( `mongoose` );
const bodyParser = require( `body-parser` );
const session = require( `express-session` );





/*------------------------------------*\
  #MY DEPENDENCIES
\*------------------------------------*/

const config = require( `./config.js` );





/*------------------------------------*\
  #APP
\*------------------------------------*/

const app = express();

app.use( express.static( `./src` ) ) ;
app.use( express.static( __dirname + '/../node_modules' ) );
app.use( bodyParser.json( { limit: '50mb' } ) );
app.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ) );
app.use( session( config.session ) );







/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

// PASSPORT CODE GOES HERE





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

// require( './masterRoutes.js' )( app );




/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen( config.port, () => {
	console.log( 'Auth server listening on port', config.port );
} );
