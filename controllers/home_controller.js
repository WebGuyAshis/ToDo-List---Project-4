module.exports.home = function(req,res){
    return res.render('welcome',{
        title:"Welcome Page"
    })
}
