let Event = require('../models/Event');

let eventController = {
        createEvent: function(req, res) {
            console.log("create");
            //    if ("req.body.date" : {"$gte":  Date.now}){
            let event = new Event(req.body);


            event.save(function(err, event) {
                if (err) {
                    res.send(err.message)
                    console.log(err.message);
                } else {

                    res.send('success');

                }
            })
        },

        getAllEvents: function(req, res) {
            Event.find({}, '-_id -companyID', function(err, events) {
                if (err)
                    res.send(err.message)
                else
                    res.send({
                        events
                    });
            })
        },
        //coID should be in the session so i can query in the events table to get all events that have coID= to companyID

        getCompanyEvents: function(req, res) {

            Event.find({
                    companyID: 2
                }, function(err, events) {

                    if (err)
                        res.send(err.message);
                    else
                        // res.render('events', {
                        //     events
                        // }
                        res.send(200);
                
            });
    },

    updateEvents: function(req, res) {

        // the token should be inserted in the first bracket to access the event we need to update
        // i should handle all the attributes that can be update so this function is 100% complete but 100% working
        Event.update({
            _id: Event.getElementById(req.body._id) // not sure about the syntax of this line
        }, {
            $set: {
                name: req.body.name
            }
        }, function(err, event) {
            if (err) {
                res.send(err.message)
                console.log(err);
            } else {
                console.log(event);
                // res.redirect('/events');
                res.send(200);

            }
        })
    }
}


module.exports = eventController;
