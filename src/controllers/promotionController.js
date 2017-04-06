let promotion = require('../models/Promotion');

module.exports = {
    getAllPromotions: function (req, res) {
        promotion.find(function (err, promotions) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'You are not allowed to view the promotions, or no promotions are available',
                });
            }
            else {
                res.json({
                    success: true,
                    data: promotions
                }); //should have a view
            }
        });
    }
}
