let Promotion = require('../models/Promotion');

module.exports = {
    getAllPromotions: function (req, res) {
        Promotion.find(function (err, promotions) {
            if (err)
                res.send(err.message)
            else
                res.send({ promotions }); //getPromotions should be a view

        })
    }
}
