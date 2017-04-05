let Company = require('../models/Company');

let companyController = {

  companySubscription: function (req, res) {
    let company = new Company({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      city: req.body.city,
      area: req.body.area,
      address: req.body.address,
      description: req.body.description,
      category: req.body.category,
      logoURL: req.body.logoURL,
      email: req.body.email,
      mobileNumbers: req.body.mobileNumbers,
      branches: req.body.branches,
      socialMediaURL: req.body.socialMediaURL,
      verified: false,
      payementMethod: req.body.payementMethod,
      securityQuestion: req.body.securityQuestion,
      securityAnswer: req.body.securityAnswer
    });

    company.save(function (err, company) {
      if (err) {
        res.send(err)
        console.log(err);
      } else {
        //  console.log(student);
        res.send('success');
        //res.redirect('/');
      }
    })

  },
  viewCompanyProfile: function (req, res) {
    var id = req.body.id;
    console.log(id);
    company.findById(id, function (err, Company) {
      if (err)
        res.send(err.message);
      else
        console.log('success');
      res.render('companyProfile', {
        Company
      })
    }) 
  },
 

  getUnverfiedCompanies: function (verified, callback) {
    var query = {
      verified: verified
    };
    Company.find(query, callback);
  },

  getCompanyByUsername: function (username, verified, callback) {
    var query = {
      username: username
    };

    Company.findOneAndUpdate(query, {
      $set: {
        "verified": verified
      }
    }).exec(callback);
  },

 getCompanies: function (req, res, next) {

        var query = Company.find({}).select('name username');

        query.exec(function (err, faq) {
            if (err) return next(err);
            res.send(faq);
        });
    },

  getCompanyAndRemove: function (username, callback) {
    var query = {
      username: username
    };
    Company.findOneAndRemove(query, callback);
  },
      updatePassword: function (req,res) {

        Company.findOneAndUpdate({_id: req.decoded.id }, { "password" : req.body.newPassword }, function(err, company) {
            if (err) {
                console.log(err);
                console.log('update password failed ');
            }
            if (company){
                console.log("Password updated");
                company.markModified('Password ok');
            }
        });
    },

    resetPassword: function (req,res) {
        if (req.decoded.securityAnswer === req.answer) {
            Company.findOneAndUpdate({_id: req.decoded.id }, { "password" : req.newPassword }, function(err, client) {
                if (err) {
                    console.log('reset password failed ');
                }
                if (company){
                    console.log("Password reset successful");
                    company.markModified('Password reset ok');
                }
            });
        }
    
    },
}

 module.exports = companyController;