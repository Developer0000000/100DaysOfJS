//* -----------------------------------
//@ Programming Question: Sort an Array
//* -----------------------------------

//% Write a function to sort an array of numbers in an ascending order.

// todo Requirements:
//# The function should take an array of numbers as input.
//# It should return a new array with the numbers sorted in ascending order.
//# The original array should remain unchanged.
//# You are not allowed to use the built-in sort() method.

const sortAscending = (numbers) => {

    //* 1st
    // for (let i = 0; i <= numbers.length; i++) {

    //     for (let j = 0; j <= numbers.length; j++) {

    //         if (numbers[j] > numbers[j + 1]) {
    //             let temp = numbers[j];
    //             numbers[j] = numbers[j + 1];
    //             numbers[j + 1] = temp;
    //         }

    //     }

    // }
    // return numbers


    //* 2nd
    // const nums = [...numbers];
    // nums.sort((a, b) => a - b);
    // return nums;

    //* 3rd
    // const nums = [...numbers];
    // nums.sort((a, b) => {
    //     if (a > b) {
    //         return 1
    //     } else if (a < b) {
    //         return -1
    //     } else {
    //         return 0
    //     }
    // });
    // return nums;


    //* 4th
    numbers.map((number) => {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
            }
        }
    });
    return numbers;

};

// todo Example usage :
console.log(sortAscending([5, 3, 1, 81])); // Output: [1, 3, 5, 8]
console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8, 10]
console.log(typeof sortAscending([3, 5, 8, 10]));
console.log(typeof sortAscending);