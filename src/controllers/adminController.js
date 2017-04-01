 var Admin = require('../models/Admin');

 module.exports.adminRegister = function (req, res) {
        let newAdmin = new Admin({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });

        newAdmin.save(function(err, newAdmin){
            if(err){
                 res.json({success: false, msg: 'Admin not registered.'});
            }else{
                 res.json({success: true, msg: 'Admin registered.'});
            }
        });
}

