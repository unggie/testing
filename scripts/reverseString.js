export function reverseString(string) {
    let stringArray = string.split('');
    stringArray.reverse();
    return stringArray.join('');
}

console.log(reverseString('Something'));