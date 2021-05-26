// this is the naive approach for doing the email address scraping. 

var fs = require("fs"); // should allow us to use the system class to read other files. 


// try {  
//     var data = fs.readFileSync('test.txt', 'utf8' );
//     console.log(data.toString());    
// } catch(e) {
//     console.log('Error:', e.stack);
// }



// try {  
//     var data2 = fs.readFile('test.txt', function(err, data) {
//         res.write(data);
//         return res.end();
//       }); );

//     console.log(data.toString());    
// } catch(e) {
//     console.log('Error:', e.stack);
// }

// fs.readFile('test.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

const text=fs.readFileSync('.\\test.txt', 'utf8')
console.log('SUCCESSFULL RUN');