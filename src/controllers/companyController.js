let Company = require('../models/Company');

let companyController = {

  companySubscription: function (req, res) {
    console.log(req.body);
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
      }
      else {
        //  console.log(student);
        res.send('success');
        //res.redirect('/');
      }
    })
  },

  viewCompanyProfile: function (req, res) {
    var id = req.query;
    
    Company.findById( id , function (err, company) {
      if (err)
        res.send(err.message);
      else
        res.send(company);
       //console.log(req.body);
     // res.render('companyProfile', { Company })
    })
  },


}

module.exports = companyController;
