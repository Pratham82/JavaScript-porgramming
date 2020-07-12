// Basic Data Structures: Iterate Through All an Array's Items Using For Loops

/*
JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.
*/

/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.


*/


function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(var i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) == -1){for(var i = 0; i < arr.length; i++){
            if(arr[i].indexOf(elem) === -1){
                newArr.push(arr[i])
            }
        }
            newArr.push(arr[i])
        }
    }
    
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
  console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));

  console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));