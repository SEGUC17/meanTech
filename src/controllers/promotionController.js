let Promotion = require('../models/Promotion');


let promotionController = {


postPromotion:function(req,res){

     let promotion = new Promotion(req.body);
        promotion.save(function(err, promotion){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(promotion);
            }
        })

},
updatePromotion:function(req,res){


},
viewPromotions:function(req,res){

    promotion.find(function(err, promotions){
            
            if(err)
                console.log(err.message);
            else
                console.log('mesh3agbak es2al bara', {promotions});
        }) 




},
deletePromotion:function(req,res){


}


}


module.exports = promotionController;