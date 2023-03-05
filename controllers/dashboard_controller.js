module.exports.dashBoard = function(req,res){
    return res.render('dashboard',{
        title: "DashBoard"
    });
}

console.log("Users is Loaded Successfully")