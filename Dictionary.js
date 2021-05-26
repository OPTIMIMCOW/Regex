var fs = require("fs"); // should allow us to use the system class to read other files. 

const text=fs.readFileSync('test.txt', 'utf8');

const regex = new RegExp(/@([A-z0-9])+.[A-z]+\S[A-z]+/gm);
let arrMatched = text.match(regex);

var dictionary = {};

for(let i = 0; i<arrMatched.length; i++){
//console.log(arrMatched[i]);
    //if domain is not in the list 
    // create new key and give value as 1
    //key exist, add value by 1
    
    if (dictionary.hasOwnProperty(arrMatched[i])){
        dictionary[arrMatched[i]]++;
        // let temp = dictionary.arrMatched[i];
        // let tempName = arrMatched[i];
        // dictionary.tempName = temp + 1;
        
    } else {
        dictionary[arrMatched[i]] = 1;
    }

    // for(let i = 0; i<dictionary.length; i++){
    //     let tempMaxName;
    //     tempMaxNumber;


        
    //     maxNumber = dictionary[i];

    // }

}

let maxValue = 0;
let maxKey;

let tempArray = Object.entries(dictionary);
for (const [key, value] of Object.entries(dictionary)) {
    //console.log(`${key}: ${value}`);
    if(value>maxValue){
        maxValue=value;
        maxKey = key;
    }

  }
for(let i= 0; i<tempArray.length;)
tempArray.sort();

//console.log(dictionary);
//console.log(arrMatched.length);
//console.log(Math.max(Object.values(dictionary)));
console.log(maxValue + maxKey);

