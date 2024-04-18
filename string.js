// String Methods



const sentence = 'The quick brown fox jumps over the lazy dog'

// Length of a string
console.log(sentence.length)

// To upper case
document.write(sentence.toUpperCase())

// To lower case
document.write(sentence.toLowerCase())

//Cut part of a string
console.log(sentence.slice(0,11))

// Finding index
console.log(sentence.length -1)

// Finding index of fox
console.log(sentence.indexOf('fox'))

// find the last index of o
console.log(sentence.lastIndexOf('fox'))

//replace a particular string
console.log(sentence.replace('fox', 'goat'))

// replace all o with 0
console.log(sentence.replaceAll('o', '0'))

//check if jump exists
console.log(sentence.includes('jump'))

// check if sentence starts with 'The'
console.log(sentence.startsWith('The'))

// add strings together
console.log('Alphabets: '.concat(sentence))

// find a character at a particular index
console.log(sentence.charAt(16))

// convert a string to an array
console.log(sentence.split(' '))

// repeat a particular string
console.log(sentence.repeat(2))

const num = 80
console.log(typeof num.toString())

console.log(String(num))