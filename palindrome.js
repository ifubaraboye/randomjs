


let word = prompt("Enter your text");
// Prompts the user for input

let sep = word.split(""); 
//Splits each letter of the word into an array

let sepReverse = sep.reverse() 
// Reverses the array

let wordReversed = sepReverse.join("")
// Joins the array and converts it into a string

// console.log(wordReversed)

if (word.toLowerCase() == wordReversed.toLowerCase()) {
    console.log(word + " is a palindrome!")
} else {
    console.log(word + "  is not a palindrome!")
}