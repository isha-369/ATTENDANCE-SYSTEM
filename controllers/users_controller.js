const User=require('../models/user');

module.exports.login=function(req,res)
{
    return res.render('login');
}

module.exports.create=function(req,res){
   console.log(req.body);
    if(req.body.password!=req.body.confirmPassword)
    {
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err)
        {console.log("Error in finding user in signing up");
        return;
        }
        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating user while signing up');return}
                return res.redirect('/users/login')
            })
        }
        else{
             return res.redirect('back');
        }
    })
}

module.exports.createSession=function(req,res){
    console.log("hi");
  return res.redirect('/');
  
}