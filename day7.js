// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.


const findMax = (numbers) => {

    //* 1st
    // return Math.max(...numbers);

    //* 2nd
    // let max = numbers[0];
    // for (let i = 0; i < numbers.length; i++) {
    //     if(numbers[i] > max) max = numbers[i];
    // }
    // return max

    //* 3rd
    // let max = numbers[0];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > numbers[i + 1]) {
    //         max = numbers[i];
    //     };
    // }
    // return max;

    //* 4th
    // return numbers.reduce((acc, num) => acc > num ? acc : num, '');

    //* 5th
    // let i = 0, max = numbers[0];
    // while (i <= numbers.length) {
    //     if (numbers[i] > max) max = numbers[i];
    //     i++;
    // }
    // return max;

    // * 6th
    // numbers.sort((a, b) => b - a);
    // return numbers[0];

    // * 7th
    const nums = [...numbers];
    nums.sort((a, b) => {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    });
    return nums[nums.length - 1];

};


// Example usage:
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-10, -5, -3, -9, -1, -2])); //Output: -2
console.log(findMax([5])); // Output: 5