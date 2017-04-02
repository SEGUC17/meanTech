let Promotion = require('../models/Promotion');

let promotionController = {
    getAllPromotions: function (req, res) {
        Promotion.find(function (err, promotions) {
            if (err)
                res.send(err.message)
            else
                res.render('getPromotions', { promotions }); //getPromotions should be a view

        })
    }
}