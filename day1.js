

//* -----------------------------------
//@ Programming Question: Longest Word in a String
//* -----------------------------------

//% Q: Write a function find Longest word that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//% Constraints:
//# The input string may contain alphabetic characters, digits, spaces,
//# The input string is non-empty.
//# The input string may contain multiple words separated by spaces.

// ! 📝Note:
//# If the input string is empty or contains only whitespace, the function should return false.
//# The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {

        let words = str.split(' '), bigWord = '';
    
        words.forEach(word => { if (word.length > bigWord.length) bigWord = word; });
    
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word.length > bigWord.length) bigWord = word;
        }
    
        let i = 0;
        while (i < words.length) {
            const word = words[i];
            if (word.length > bigWord.length) bigWord = word;
            i++;
        }
    
        words.reduce((acc, val) => { if (bigWord.length < val.length) bigWord = val }, '');

        bigWord = words.reduce((acc, val) => val.length > acc.length ? val : acc, '');

        words.map((word)=>{ if (bigWord.length < word.length) bigWord = word })

        words.filter((word)=>{ if (bigWord.length < word.length) bigWord = word});

        //  words.sort((a,b) => a.length-b.length );
        // bigWord = words.at(-1);
        words.sort((a,b) => b.length-a.length );
        bigWord = words.at(0);


        return bigWord || false;
};
const word = findLongestWord('The quick brown fox jumped over the lazy dog');
const word1 = findLongestWord('The quick brown fox jumped over the lazy dogdog');
const word2 = findLongestWord('     ');
console.log("🚀 ~ word:", word);
    




    
    // const word = findLongestWord('The quick brown fox jumped over the lazy dog')
    // // const word = findLongestWord('The quick brown fox jumped over the lazy dogdog')
    // // const word = findLongestWord('     ')
    // // const word = findLongestWord('')
    // console.log("🚀 ~ word:", word)


// const findLongestWord = (str) => {

//     let words = str.split(' '), bigWord = '';

//     // words.forEach(word => {
//     //     if (word.length > bigWord.length) //     // bigWord = word;
//     //     
//     // });

//     for (let i = 0; i < words.length; i++) {

//         const word = words[i];

//         if (word.length > bigWord.length) // bigWord = word;
//         
        
//     }

//     // let i = 0;
//     // while (i < words.length) //     //     const word  words[i];
//     //     if (word.length > bigWord.length) //     // bigWord = word;
//     //     

//     //     i++;

//     // }

//     // words.reduce((acc, val) => {

//     //     if (bigWord.length < val.length) //     // bigWord = val
//     //     

//     // }, '');

//     return bigWord || false;

// };

// const word = findLongestWord('The quick brown fox jumped over the lazy dog')
// const word = findLongestWord('The quick brown fox jumped over the lazy dogdog')
// const word = findLongestWord('     ')
// // const word = findLongestWord('')
// console.log("🚀 ~ word:", word)
