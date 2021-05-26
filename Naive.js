// this is the naive approach for doing the email address scraping. 
var fs = require("fs"); // should allow us to use the system class to read other files. 


const text=fs.readFileSync('test.txt', 'utf8');
console.log(text);
console.log(text.length);

let counter = 0;
let arrDebug = new Array();

//console.log(text.substring(0, 16));

for(let i = 0; i < text.length; i++) {
    let substring = text.substring(i, i + 14)
    //console.log(substring);
 if ((substring === '@softwire.com ') || (substring === '@softwire.com\r\n'))  { 
     
    arrDebug.push(text.substring(i-3, i + 14));
    counter++;
    //console.log(counter);
}
}
console.log('@softwire.com appeared '+ counter + ' times');

arrDebug.forEach(e => console.log(e));

console.log('@softwire.com appeared '+ counter + ' times');
