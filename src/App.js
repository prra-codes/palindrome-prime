import React, { useState } from "react";
import "./App.css";

function App() {
  const [minNum, setMinNum] = useState(""); //setting minNum collected from input into state
  const [maxNum, setMaxNum] = useState(""); //setting maxNum collected from input into state
  const [mainArray, setMainArray] = useState([]); //setting palindrome primes array into state

  const isPrime = (num1) => {
    if (num1 < 2) {
      //one is not a prime number
      return false;
    }

    //modulus %
    for (let i = 2; i < num1; i++) {
      if (num1 % i === 0) {
        // can't be prime unless divides by only itself and 1. This condition means it can divide by another number as well. For loop iterates from i to num1
        return false;
      }
    }
    return true; //returning true if it is a Prime Number
  };

  console.log(isPrime(12), "IS IT PRIME??"); //testing for primes
  console.log(isPrime(11), "This is a Prime");
  console.log(isPrime(21), "AM I A PRIME OR NOT!?");

  const isPalindrome = (num2) => {
    /// 122 "122" ["1", "2", "1"]  ["2", "2", "1"]  "221"
    let numToString = num2.toString(); // turns num to string
    let numArray = numToString.split(""); // puts in array
    let reversedNumArray = numArray.reverse(); //reverses array
    let reversedStringNumber = reversedNumArray.join(""); //turns back to a string

    if (reversedStringNumber === numToString) {
      return true; // if Palindrome, return true
    } else {
      return false;
    }
  };

  const primeAndPalindrome = (min_num, max_num) => {
    if (min_num <= 0 || max_num <= 0) {
      alert(`Two positive values are needed!`);
      return false;
    } // so two positive numbers are entered

    if (min_num > max_num) {
      alert(`The minimum number must be less than the maximum number!`);
      return false;
    } // so min num can't be less than max num

    let finalArray = [];
    for (let i = min_num; i <= max_num; i++) {
      // range of min and max
      if (isPrime(i) && isPalindrome(i)) {
        finalArray.push(i);
      }
    }
    // uses for loop and two previous functions I made to push all palindrome primes into one array

    setMainArray([...finalArray]); //sets all palindrome primes into state mainArray
    setMaxNum(""); //reset state of maxNum after submission
    setMinNum(""); //reset state of minNum after submission
    return finalArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }; // so page doesn't auto-refresh, attached to my form

  // if I put <form onSubmit={handleSubmit}>, this func has access to data user has inputted
  // to retrieve the form data that user has entered into the form, we use the component state

  return (
    <div className="App">
      <h1>Check for prime number and palindrome range:</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <p>
              {" "}
              <label>Minimum Number: </label>
            </p>
            <input
              type="number"
              value={minNum}
              className="form--input"
              onChange={(e) => {
                setMinNum(parseInt(e.target.value, 10));
              }}
            />
            {/* parseInt to convert string to num and then save in state */}
          </div>
          <div>
            <p>
              <label>Maximum Number: </label>
            </p>
            <input
              type="number"
              className="form--input"
              value={maxNum}
              onChange={(e) => {
                setMaxNum(parseInt(e.target.value, 10));
              }}
            />
          </div>
        </div>
        {/* <button type="submit" onClick={() => primeAndPalindrome(minNum, maxNum)}>Submit</button> */}
        <button
          className="form-button"
          onClick={() => primeAndPalindrome(minNum, maxNum)}
        >
          Check
        </button>
        {/* passing in minNum and maxNum state values into primeAndPalindrome, so those values linked with input will be used in ui when user types those values in */}
      </form>
      <div>
        {mainArray.map((element, index) => {
          return <h1 key={index}>{element}</h1>;
        })}
        {/* Mapping over state array of palindrome primes (mainArray) and displaying in user interface (ui) */}
      </div>
    </div>
  );
}

export default App;
