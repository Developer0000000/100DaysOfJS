
//* -----------------------------------
//@ Programming Question: Hash Tag Generator
//* -----------------------------------

//% Q: You are required to implement a function generateHash that generates a hash tag from a given input string.

//% The hash tag should be constructed as follows:

//#  The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//# If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//# Otherwise, the function should return the generated hash tag prefixed with #.



// * Write a function generateHash to accomplish this task.

const generateHash = (str) => {

    if (str.length > 280 || str === '') return false;

    const words = str.split(' ');
    let newStr = '';

    //* 1st
    for (const word of words) newStr += word.charAt(0).toUpperCase() + word.slice(1);

    //* 2nd
    newStr = words.map(word => word.replace(word[0], word[0].toUpperCase())).join('');

    return newStr ? '#' + newStr : false;

};

const word = generateHash('The quick brown fox jumped over the lazy dog');
console.log("🚀 ~ word:", word);