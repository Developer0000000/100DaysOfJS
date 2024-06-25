//* -----------------------------------
//@ Programming Question: Sort an Array
//* -----------------------------------


//% Q: Write a function to determine whether a given string is a palindrome or not. 

/// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.



//% Constraints:
//# The input string may contain letters, digits, spaces, punctuation, and special characters.
//# The function should be case-insensitive, meaning "Racecar" and " racecar" should be considered the same.
//# Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
//# The function should return true if the input string is a palindrome and false otherwise.



const isPalindrome = (str) => {

    //* 1st
    // let palindrome = str.split('').reverse().join('');
    // if (palindrome === str) return true;
    // else return false;

    //* 2nd
    // let palindrome = str.toLowerCase().replace(/\W/g, '').split('').reverse().join('');
    // if (palindrome == str) return true;
    // else return false;

    //* 3rd
    // str = str.toLowerCase().replace(/\W/g,'');
    // let palindrome = str.split('').reverse().join('');
    // return str === palindrome ? true : false

    //* 4th
    // const palindrome = str.toLowerCase().replace(/\W/g, '').split('');
    // for (let i = 0; i <= palindrome.length; i++) {
    //     if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) return false;
    // }
    // return true;

    //* 5th
    const palindrome = str.toLowerCase().replace(/\W/g, '').split('');

    let i = 0;
    let j = palindrome.length - 1;

    while (i <= j) {
        if (palindrome[i] !== palindrome[j]) return false;
        i++;
        j--;
    }

    return true

};

console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('racecars')); // Output: false
console.log(isPalindrome('1221')); // Output: true
console.log(isPalindrome('456654')); // Output: true
console.log(isPalindrome('194591')); // Output: false
