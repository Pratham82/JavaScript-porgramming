// Type conversion in JS

/*
Typecasting or coercion in simple term means to change the data type of a value 
to to another data type like for example, integer to a string or a string to a boolean etc.

There are two types of coercion, implicit and explicit. 
1. Implicit coercion is when there is automatic conversion of data type
2. When a developer expresses the intention to convert between types by writing 
the appropriate code, it’s called explicit type coercion
*/
// Converting number to string
let val1

val1 = String(45)
val1 = String(45+45)

console.log(val1);
console.log('val1: ',typeof val1);
console.log('val1 length: ',val1.length);

// Boolean to string
let val2
val2 = true
val2 = String('false')

console.log(val2);
console.log('val2: ',typeof val2);
console.log('val2 length: ',val2.length);

// Date to string
let val3
val3 = new Date()
val3 = String(new Date())

console.log(val3);
console.log('val3: ',typeof val3);
console.log('val3 length: ',val3.length);

// Sting to array
let val4 = [54,564,5,745,48,798,78]
    val4 = String([54,564,5,745,48,798,78])

console.log(val4);
console.log('val4: ',typeof val4);
console.log('val4 length: ',val4.length);

//toString method

val5 = (423).toString()
val6 = (false).toString()

console.log(val5);
console.log('val5: ',typeof val5);
console.log('val5 length: ',val5.length);
console.log(val5);
console.log('val6: ',typeof val6);
console.log('val6 length: ',val6.length);


//String to number

//Using Number method

let num1 = Number('488')

console.log('num1:', num1)
console.log('num1: ',typeof num1);
console.log(num1.toFixed(3)); // The number of digits to appear after the decimal point

// boolean to number 

let num2 = Number(true)   //Gives 1
    num2 = Number(false)  //Gives 0
    num2 = Number(null)   //Gives 0
    num2 = Number("hi")   //Gives NaN(Not a number)
    num2 = Number([45,564,512])   //Gives NaN(Not a number)

console.log('num2:', num2)
console.log('num2: ',typeof num2);

// Using parseInt method

let num3 = parseInt('45451')
num3 = parseInt('45451.545') //It will not include decimals because it is getting converted to Integers

// For converting to decimals parseFloat() method
num3 = parseFloat('45451.545') 

console.log('num3:', num3)
console.log('num3: ',typeof num3);


//* Type coercion
const n1 = String('40')
const n2 = 60     
const sum = n1 + n2
console.log(sum);  // Output: 4060 ; because the num2 also gets converted to string implicitly
console.log("sum: ",typeof sum);
