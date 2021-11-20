const express = require('express');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
// const MongoStore=require('connect-mongo')(session);
const MongoStore = require('connect-mongodb-session')(session);



//reading through post request
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static('./assests'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//mongo store is used to store session cookie in db
app.use(session({
    name:'iattend',
    secret:'qwerty',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());




// app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
