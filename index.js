  const fs = require('fs');
  const carbone = require('carbone');

  // Data to inject
  var data = {
    firstname : 'John',
    lastname : 'Doe'
  };

  // Generate a report using the sample template provided by carbone module
  // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // Of course, you can create your own templates!
  carbone.render('./node_modules/carbone/examples/simple.odt', data, function(err, result){
    if (err) {
      return console.log(err);
    }
    // write the result
    fs.writeFileSync('result.odt', result);
  });

  var data = [
    {
      movieName : 'Matrix',
      actors    : [{
        firstname : 'Keanu',
        lastname  : 'Reeves'
      },{
        firstname : 'Laurence',
        lastname  : 'Fishburne'
      },{
        firstname : 'Carrie-Anne',
        lastname  : 'Moss'
      }]
    },
    {
      movieName : 'Back To The Future',
      actors    : [{
        firstname : 'Michael',
        lastname  : 'J. Fox'
      },{
        firstname : 'Christopher',
        lastname  : 'Lloyd'
      }]
    }
  ];

  carbone.render('./node_modules/carbone/examples/movies.docx', data, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('movies_result.docx', result);
  });

  carbone.render('./node_modules/carbone/examples/flat_table.ods', data, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('flat_table_result.ods', result);
  });

  var data = {
    firstname : 'John',
    lastname : 'Doe'
  };

  var options = {
    convertTo : 'pdf' //can be docx, txt, ...
  };

  carbone.render('./node_modules/carbone/examples/simple.odt', data, options, function(err, result){
    if (err) return console.log(err); 
    fs.writeFileSync('result.pdf', result);
    process.exit(); // to kill automatically LibreOffice workers
  });