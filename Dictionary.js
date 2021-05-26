
//############### READ THE TEXT FILE INTO JAVASCRIPT ################//
var fs = require("fs"); // should allow us to use the system class to read other files. 

const text=fs.readFileSync('test.txt', 'utf8');

//############### FIND THE EMAILS ADDRESSED IN TEXT ################//
const regex = new RegExp(/@([A-z0-9])+.[A-z]+\S[A-z]+/gm);
let arrFound = text.match(regex);

//############### CREATE AND POPULATE OBJECT TO SUMMARISE EMAIL DOMAINS################//
var dictionary = {}; // created an empty object and will add properties dynamically.

for(let i = 0; i<arrFound.length; i++){
    if (dictionary.hasOwnProperty(arrFound[i])){ // note has own property is an inbuilt function so we do not need to write it. 
        dictionary[arrFound[i]]++;

        
    } else {
        dictionary[arrFound[i]] = 1;
    }  

}

//############### SORT SUMMARY TO FIND MAX DOMAIN USER ################//

//converting the dictionary object to an array
let maxValue = 0;
let maxKey;

let tempArray = Object.entries(dictionary); // Note entries is an inbuilt function of an object so we do not need to write it. 
for (const [key, value] of Object.entries(dictionary)) {
    //console.log(`${key}: ${value}`);
    if(value>maxValue){
        maxValue=value;
        maxKey = key;
    }

}

//############### SHOW OUTPUTS ################//
console.log(dictionary);
//console.log(arrMatched.length);
//console.log(Math.max(Object.values(dictionary)));
console.log(maxValue + maxKey);

