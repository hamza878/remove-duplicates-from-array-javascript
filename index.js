//We can eliminate duplicates using sets and objects in javascripts

//Creating set and object with duplicates so it can eliminate duplicates automatically
let set = new Set([1, 1, 2, 3, 4]);

let numbersObj = {
  1: "first",
  2: "second",
  3: "third",
  1: "fourth",
};

console.log("Using sets and object to show uniqueness", set, numbersObj);

//Now we can use array to show how we can store and remove duplicates from array

let arr1 = [1, 1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9, 9, 10, 10];

//Copying array to set
let set2 = new Set([...arr1]);

//Copying array to object and just setting the key for uniqueness
let numbersObj2 = {};
for (const i of arr2) {
  numbersObj2[i] = "";
}

//Lets see the results
console.log(
  "Using sets and object with array values to show uniqueness",
  set2,
  numbersObj2
);

//Now push the values of sets back to arrays

let copiedArr = Array.from(set2);
console.log("Value of coppied array from set", copiedArr);

//Now push the values of maps back to arrays

let coppiedObject = Object.keys(numbersObj2);
console.log("Value of coppied array from object", coppiedObject);
