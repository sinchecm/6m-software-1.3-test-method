/*
    Task:
    You are to convert the given two arrays (bookIdArr & bookTitle) into an object (booksObj) with four key value pairs:
    - NLB1 -> Lord of the Rings
    - NLB2 -> Programming for Dummies
    - NLB3 -> Introduction to Software Testing
    - NLB4 -> How to be a Software Developer

    Tips: 
    - Use a for loop and utilizes the index variable as a running number.
    - Be sure got use google!
*/

const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];
let booksObj = {}; 

function convert(keyArr, valueArr){
    
    //- Step 1: Create a local scoped object literal.
    let result = {}; 
    // Step 2: Define a for-loop that runs based on keyArr's length
    for (let i = 0; i < keyArr.length; i++) {
        // Step 3: Add the key and value to the local scoped object
        result[keyArr[i]] = valueArr[i];
    }
    
    return result; // Step 4: Return the object literal
}
   
}

function printByKey(key){
    console.log(booksObj[key]);
}

booksObj = convert(bookIdArr, bookTitle);
printByKey("NLB2"); // prints "Progamming for Dummies"

// Ignore the code below this line
module.exports = {
    convert
}
