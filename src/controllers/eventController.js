let Event = require('../models/Event');

let eventController = {
  createEvent:function(req, res){
      console.log("create");
  //    if ("req.body.date" : {"$gte":  Date.now}){
                let event = new Event(req.body);


              event.save(function(err, event){
                    if(err){
                       res.send(err.message)
                    console.log(err.message);
                    }
                    else{

                      res.send('success');

                    }
                })
            },

    getAllEvents:function(req, res){
        Event.find({}, '-_id -companyID', function(err, events){
            if(err)
                res.send(err.message)
            else
                res.send({events});
        })
    }
}


module.exports = eventController;
