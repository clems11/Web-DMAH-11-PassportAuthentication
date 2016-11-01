'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require( `express` );
const mongoose = require( `mongoose` );
const bodyParser = require( `body-parser` );
const session = require( `express-session` );
const passport = require( `passport` );
const FacebookStrategy = require('passport-facebook').Strategy;





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
app.use( passport.initialize() );
app.use( passport.session() );







/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

passport.use( new FacebookStrategy( config.facebook, function( token, refreshToken, profile, done ) {
  return done( null, profile );
} ) );





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

app.get( '/auth/facebook', passport.authenticate( 'facebook' ) );

app.get( '/auth/facebook/callback', passport.authenticate( 'facebook', {
	successRedirect: '/#/me',
	failureRedirect: '/'
} ) );

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get( '/logout', function( req, res ) {
	req.logout();
	res.redirect( '/' );
} );

app.get( '/api/user', function( req, res ) {
	console.log( req.user );
	return res.json( req.user )
} );




/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen( config.port, () => {
	console.log( 'Auth server listening on port', config.port );
} );
