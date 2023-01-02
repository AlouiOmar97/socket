var express = require('express');
var router = express.Router();
var Contact= require("../models/contact")
/* GET home page. */
router.post('/add', function(req, res, next) {
console.log("list contact");
console.log(req.body);
new Contact({
    FullName : req.body.FullName,
    Phone : req.body.Phone
  }).save(
    (err, newContact) => {
      if (err)
        console.log("Error message : "+err);
      else{
        console.log(newContact);
        res.send(" New contact added "+ newContact._id)
      }
    }
  )
  });

  router.get("/",(req,res)=>{
    Contact.find((err,data)=>{
        if (err)
        console.log("Error message : "+err);
      else{
        res.json(data)
      }
    })
  })


  router.delete("/delte/:id",(req,res)=>{
    Contact.findByIdAndRemove(
        req.params.id,
        function (err, data ) {
          if (err) console.log(err);
          else res.send('contact deleted');
        }
      )
  })

module.exports = router;
