let Service = require('../models/Service');

let serviceController = {
    getAllServices:function(req, res){
        Service.find({}, '-_id -companyID', function(err, services){
            if(err)
                res.send(err.message)
            else
                res.send({services});
        })
    }
}

module.exports = serviceController;