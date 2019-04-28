var express = require('express');
var router = express.Router();
const fs = require('fs');
const carbone = require('carbone');

/* GET users listing. */
router.get('/',async function(req, res, next) {
  let data = {
    name:"Ruben E. Tejeda Roa",
    age: 27
  }
  let opt = {
    convertTo : 'pdf' //can be docx, txt, ...
  }
  carbone.render('./sources/example.docx', data, opt, function(err, result){
    if (err) {
      return console.log(err);
    }
    
// res.setHeader('Content-Length', result.size);
res.setHeader('Content-Disposition', 'inline');
res.contentType("application/pdf");
    res.send(result);
  });
});

module.exports = router;
