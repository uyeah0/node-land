var fs = require('fs'); //filesystem 

fs.readFile('sample.txt', 'utf-8', function(err, data){
    console.log(data);
});