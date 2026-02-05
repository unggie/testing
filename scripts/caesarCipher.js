// Creates an object that returns an array of the english alphabet letter when the letters method is invoked
const alphabet = (start, end) => {
    function letters() {
        let array = [];
        for (let i = start; i <= end; i++) {
            array.push(String.fromCharCode(i));
        }
        return array;
    }
    return {start, end, letters}
}

export function caesarCipher(string, key=0) {
    const lowerAlphabet = alphabet(97, 122);
    const upperAlphabet = alphabet(65, 90);

    let array = (string.split(''));
    array.map(element => element.charCodeAt(0))

    const unicodeArray = array.map(element => element.charCodeAt(0));
    
    const shiftedArray = unicodeArray.map(element => {
        let shift = element + key
        if ((element >= lowerAlphabet.start) && (element <= lowerAlphabet.end)) {
           return element = (shift > lowerAlphabet.end)
                ? (shift - (lowerAlphabet.end - lowerAlphabet.start + 1))
                : (shift);
        } else if ((element >= upperAlphabet.start) && (element <= upperAlphabet.end)) {
            return element = (shift > upperAlphabet.end)
                ? (shift - (upperAlphabet.end - upperAlphabet.start + 1))
                : (shift);
        } else {
            return element;
        }

    })
    const stringArray = (shiftedArray.map(element => String.fromCharCode(element)));
    const encodedString = stringArray.join('');

    return encodedString;
}

// console.log(cipher('ABC, XYZ', 3));
// console.log(cipher('abc, xyz', 4));
// console.log(cipher('ABC, xyz', 5));
// console.log(cipher('AbC, xYz', 6));

// const upperArray = alphabet(65, 90).letters();
// const upperCaseLetters = upperArray.join('');
// const lowerArray = alphabet(97, 122).letters();
// const lowerCaseLetters = lowerArray.join('');
// console.log(upperCaseLetters);
// console.log(caesarCipher(upperCaseLetters, 1));
// console.log(caesarCipher('Hey, Bestie! I missed you. <3'));
// console.log(caesarCipher('Hey, Bestie! I missed you. <3', 1));

console.log(caesarCipher("'Hello, World!'", 3));

