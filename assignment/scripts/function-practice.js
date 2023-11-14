console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log('Test - should say "Hello, Ryan!":', helloName("Ryan"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let total = firstNumber + secondNumber;
  return total;
}

console.log("The sum of 45 and 64 is:", addNumbers(45, 64));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let total = num1 * num2 * num3;
  return total;
}

console.log("The product of 2, 5, and 7 is:", multiplyThree(2, 5, 7));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("Is 7 positive?", isPositive(7));
console.log("Is 0 positive?", isPositive(0));
console.log("Is -3 positive?", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  //console.log('Testing array;', array); //used for bug testing
  if (array.length > 0) {
    //console.log(array.length); //used for bug testing
    return array[array.length - 1];
  } else {
    return undefined;
  }
}

console.log("If last item of array should be 3:", getLast([1, 2, 3]));
console.log(
  'If last item of array should be "Ryan":',
  getLast(["John", "Ryan"])
);
console.log("If last item of array is empty:", getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  let answer = false;
  for (let search of array) {
    // console.log("search", search); // console log for debugging
    if (search === value) {
      answer = true;
    }// end if statement
  } // end for loop
  return answer;
}

console.log("Is 6 in the array? Should be true", find(6, [2, 3, 4, 5, 6, 7, 8]));
console.log("Is 6 in the array? Should be False", find(6, [2, 3, 4, 5, 7, 8]));
console.log('Is "Ryan" in the array? Should be true', find('Ryan', ['Bryon', 'Ryan', 'John']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string[0]===letter){
    return true;
  } else {
    return false;
  }
} // can access letters of strings like an array

console.log("A the first letter Apple", isFirstLetter('A', 'Apple'));
console.log("B the first letter Apple", isFirstLetter('B', 'Apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}

console.log('Sum of the array [4, 10, 8, 22] should equal 44:', sumAll([4, 10, 8, 22]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  let outputArray = [];
  for (let i in inputArray) {
    if(inputArray[i]>0){
      outputArray.push(inputArray[i]);
    }//end of if statement
  }//end for loop
  return outputArray;
} //end allPositive function

console.log('allPositive should return array [4, 8, 22]', allPositive([4, -10, 8, 0, 22]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
