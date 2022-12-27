module.exports.home = function(req,res){
    console.log(req.cookies) //prints the cookie provided in inspect->Application
    return res.render('home',{
        title:'Home'
    })
}