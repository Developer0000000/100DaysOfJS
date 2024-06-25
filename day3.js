//* -----------------------------------
//@ Interview Question: Count Occurrences Of Character
//* -----------------------------------

//% Task:
//#  Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// todo Constraints:
//#  The function should be case-sensitive.
//#  The function should handle both lowercase and uppercase characters.
//#  The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

const countChar = (str, char) => {

    // Create a variable to store the result
    let newStr = '';

    //* 1st
    // Check if the string contains the character
    newStr += str.includes(char);

    //* 2nd
    // Check if the array of characters in the string contains the character
    newStr += Array.from(str).includes(char);

    //* 3rd
    // Use a regex to search for the character in the string
    var reg = new RegExp(char, 'gi')
    newStr += str.match(reg).join('');

    //* 4th
    // Use a test to search for the character in the string
    var reg = /I/ig;
    var reg = /i/ig;
    newStr += reg.test(str);

    //* 5th
    // Split the string and count the number of items in the array that match the character
    newStr = str.toLowerCase().split(char.toLowerCase()).length - 1;

    //* 6th
    // Split the string and count the number of items in the array that match the character
    newStr = str.toUpperCase().split(char.toUpperCase()).length - 1;


    //* 7th
    // Use reduce to count the number of characters in the string
    str = str.toLowerCase();
    char = char.toLowerCase();

    //* 8th
    newStr = str.split('').filter(val => val === char);

    //* 9th
    newStr = str.split('').reduce((acc, val) => acc += val === char, 0);

    //* 10th
    // Use a loop to count the number of characters in the string
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    newStr = count;

    //* 11th
    // Use a loop to iterate through the characters in the string and add them to the result
    for (const st of str) if (st === char) newStr += st

    // Return the result
    // return newStr; //* when newStr is like newStr = data
    // return newStr.length; //* when newStr is like newStr += data
    // return newStr.length-1;
}

const output = countChar('MissIssippi', 'I')
console.log("🚀 ~ output:", output);