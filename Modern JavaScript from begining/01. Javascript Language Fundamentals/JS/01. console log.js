// alert("Hello");

// Logging strings
console.log("Hello world!"); //String are shown in white(dark theme) or black

// Logging numbers
console.log(123456); // Number are represented in blue color in the console

// Logging variable
var Test = "Testing variable";
console.log(Test);

// Logging arrays
var Array1 = [11, 12, 34, 554, 334, 53, ,];
console.log(Array1);
//Output: (7) [11, 12, 34, 554, 334, 53, empty]

// Logging object literals
var obj1 = { a1: "TestVar", a1: "TestVar2", a1: "TestVar1last" };
console.log(obj1);
// Output : {a1: "TestVar1last"} if the key is duplicate then only last key will be logged

// Logging objects with different keys
var obj2 = { a1: "TestVar1", a2: "TestVar2", a3: "TestVar3" };
console.log(obj2);

// Logging objects as table
console.table(obj2);

//  Explicitly adding an error in the file
// This is error will not hamper the execution flow, code after this error will be executed
// The normal error will stop the execution flow of the program

console.error("This error is created for testing purpose");

// This will be executed

// Adding warnings
console.warn("test warning 1");

// Timer for checking the execution time of script
console.time("Check1");
var arr = [];
for (var i = 0; i < 100; i++) {
    arr.push(i);
}
console.timeEnd("Check1");
