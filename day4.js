//* -----------------------------------
//@ Interview Question: Check Triangle Type
//* -----------------------------------

//% Write a function called check TriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// todo The function should adhere to the following rules:
//# If all three sides are of equal length, return "equilateral ".
//# If only two sides are of equal length, return "isosceles".
//# If all three sides have different lengths, return "scalene".

const checkTriangleType = (a, b, c) => {


    // if (a === b && b === c) return 'equilateral triangle';
    //* OR
    if (a === b && c) return 'equilateral triangle';

    else if (a === b || b === c || a === c) return 'isosceles triangle';

    else return 'scalene triangle';
    //* OR
    // else if (!(a === b) && !(b === c)) return 'scalene triangle'
    //* OR
    // else if (a === b ^ c) return 'scalene triangle';

};

const output1 = checkTriangleType(5, 5, 5);
const output2 = checkTriangleType(1, 2, 1);
const output3 = checkTriangleType(5, 9, 2);

console.log("🚀 ~ output:", output1);
console.log("🚀 ~ output:", output2);
console.log("🚀 ~ output:", output3);