const fs = require('fs');
const carbone = require('carbone');

var data = {
    name :"Ruben Eduardo Tejeda Roa",
    age : 27
}
var options = {
    convertTo : 'pdf' //can be docx, txt, ...
};

carbone.render('./views/example.docx', data, options, function(err, result){
    if (err) return console.log(err); 
    fs.writeFileSync('example.pdf', result);
    process.exit(); // to kill automatically LibreOffice workers
  });