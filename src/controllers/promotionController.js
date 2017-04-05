let promotion = require('../models/Promotion');

module.exports = {
    getAllPromotions: function (req, res) {
        promotion.find(function(err, promotions) {
            if (err)
            {
                console.log(promotions);
                res.send(err.message);
            }
            else
            {
                res.send({ promotions }); //should be a view
            }
        });
    }
}
