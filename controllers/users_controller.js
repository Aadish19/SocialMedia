const User = require('../models/user'); //Get the database thing and work upon it

module.exports.profile = function(req,res){
    return res.render('users',{
        title : 'users/profile'
    })
}


//Render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:'Codeial | Sign Up'
    })
}


//Render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:'Codeial | Sign In'
    })
}

//get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){ //req.body contains name attribute in input tag
        return res.redirect('back')
    }
    console.log(req.body);
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("Error in finding user in signing up ",err); 
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log("Error in creating user while signing up "); return}


                return res.redirect('/users/sign-in')
            })
        }else{ //if user is already present
            return res.redirect('back') 
        }
    })
}

//get the sign in data
module.exports.createSession = function(req,res){
     
    //Steps to authenticate

    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("Error in finding user in signing in ",err); 
            return;
        }

        //handle User found
        if(user){

            //handle password which don't mach
            if(user.password != req.body.password){
                return res.resirect('back')
            }

            //handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile')

        }else{

            //handle user not found
            return res.redirect('back')
        }
    })
}  