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

          //    }
            }


// Flaashh messages w event date hasnot passed







}


module.exports = eventController;
