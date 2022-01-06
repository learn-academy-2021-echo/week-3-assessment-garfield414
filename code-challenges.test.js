// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

/**
 * - Return empty array for numbers less than 2
 * - Initialize an empty array called "fib"
 * - Assign the first two indexes to 0 and 1
 * - Start the count at 2 and stop at the end marker we specifiy (e.g., "n")
 * - Do the fibonacci algorithm and assign it to the fib array
 * - Slice off the first index to remove 0 from the fib array
 */

var  fibonacci = (n) => {
  if (n < 2) return [];

  var fib = [];

  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib.slice(1);
};

// Dummy tests :)

// console.log(fibonacci(10));
// console.log(fibonacci(+6));

// a) Create a test with expect statements for each of the variables provided.


describe('fibonacci()', () => {
  it('should return [1, 1, 2, 3, 5, 8] when given 6', () => {
   expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
 });
  it('should return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] when given 10', () => {
   expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
 });
});


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

// Done. See above :)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

/**
 * Return an array of odds by using filter() and then chain the conditional to check if it's a number
 * Once you have that, call sort to sort from least to greatest
 */

const onlyOdds = (arr) => {
  const odds = arr.filter(number => Number.isInteger(number) && !(number % 2 === 0));
  return odds.sort((a, b) => a - b);
};

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

// console.log(onlyOdds(fullArr1));

// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

// Expected output: [-823, 7, 23]

// console.log(onlyOdds(fullArr2));

// b) Create the function that makes the test pass.

describe('onlyOdds()', () => {
  it('should return [-9, 7, 9, 199] when given fullArr1', () => {
   expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199]);
 });
  it('should return [-823, 7, 23] when given fullArr2', () => {
   expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23]);
 });
});

// Done. See above :)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

/**
 * - If the array is empty, return an empty array
 * - Loop the entire array
 * - Add the accumulative sum to a variable called "sumList"
 * - Return sumList
 */

const accumulatedSum = (arr) => {
  if (arr.length === 0) return [];

  const sumList = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    j += arr[i]
    sumList.push(j);
  }
  return sumList;
};

// b) Create the function that makes the test pass.

describe('accumulatedSum()', () => {
  it('should return [2, 4, 45, 9] when given fullArr1', () => {
    expect(accumulatedSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
  });
  it('should return [0, 7, -8, 12] when given fullArr2', () => {
   expect(accumulatedSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
  });
  it('should return [] when given fullArr3', () => {
   expect(accumulatedSum(numbersToAdd3)).toEqual([]);
 });
});
