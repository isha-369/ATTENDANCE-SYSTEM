const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user')

passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback:true
     },
     function(req,email,password,done){
        User.findOne({
            email:email
        },function(err,user){
            if(err)
            {
            //  req.flash('error',err);
             return done(err);
            }
    
      if(!user || user.password!=password){
        
        // req.flash('error','Invalid Username/Password');
          //false as authentication is not done
        return done(null,false);

      }
      return done(null,user);
        })
     }
))

passport.serializeUser(function(user,done){
    done(null,user.id);
})

//deserializing user from key in cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log("Error in finding user");return done(err)}
        return done(null,user);
    })
})

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
    return next();
    }
    // if user is not signed in
    return res.redirect('/users/login')
}
// passport.setAuthenticatedUser=function(req,res,next){
//     if(req.isAuthenticated())
//     {
//         //req.user contains current signed in user and we are just sending tis to locals for views
//         res.locals.user=req.user;
//     }
//     next();
// }

module.exports=passport;