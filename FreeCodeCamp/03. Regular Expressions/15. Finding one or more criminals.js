// Regular Expressions: Find One or More Criminals in a Hunt

/*
Time to pause and test your new regex writing skills. A group of criminals escaped
from jail and ran away, but you don't know how many. However, you do know that they
stay close together when they are around other people. You are responsible for
finding all of the criminals at once.


Write a greedy regex that finds one or more criminals within a group of other people.
A criminal is represented by the capital letter C.
*/

let reCriminals = /C+/; // Change this line

String=["C","CC","P1P5P4CCCP2P6P3","P6P2P7P4P5CCCCCP3P1","","P1P2P3","P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3",]

//Checking one String
let result = String[0].match(reCriminals)
console.log(result);


// Checking all strings at once
for( var i = 0; i<String.length; i++){
    let result_pattern;
    result_pattern = String[i].match(reCriminals)
    if (result!= ""){
        console.log("Match found: ", result_pattern, "in ", String[i]);
    }
    else{
        console.log("Match not found");
    }
}
