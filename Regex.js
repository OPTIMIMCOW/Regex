var fs = require("fs"); // should allow us to use the system class to read other files. 


const text=fs.readFileSync('test.txt', 'utf8');

const regex = new RegExp(/...@softwire.com\s/gm);
 
let arrMatched = text.match(regex);
let counter = arrMatched.length;
for(let i = 0; i<arrMatched.length; i++){
    console.log(arrMatched[i]);
} 

console.log({counter});