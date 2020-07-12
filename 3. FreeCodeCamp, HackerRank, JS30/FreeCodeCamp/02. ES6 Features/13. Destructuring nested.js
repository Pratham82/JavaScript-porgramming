// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line

  //Syntax {Outer_property_name:{Inner_property_name: var_name}} = Object name
  const {today:{low: lowToday}} =LOCAL_FORECAST
  const{today:{high: highToday}} = LOCAL_FORECAST
  console.log(lowToday);
  console.log(highToday);
  // Only change code above this line
  


const Testing_Object = {
    Outer_property_1: {
        Inner_property_1:{
            Inner_Most_property_1:'secret_value_1'
        }
    },
    
    Outer_property_2: {
        Inner_property_2:{
            Inner_Most_property_2:'secret_value_2'
        }
    }
}

//
const {Outer_property_1:{Inner_property_1:{Inner_Most_property_1: extracted_value}}} = Testing_Object
console.log(extracted_value);