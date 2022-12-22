const upperCaseArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
const lowerCaseArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
const orderArray = Array.from({ length: 26 }, (_, i) => i)
// console.log(upperCaseArray)
// console.log(lowerCaseArray)
// console.log(orderArray)

function caesarCipher(string, shift) {
    let encryptedString = "";
    const cArray = string.split("");
    const upperCaseRegEx = /[A-Z]/;
    const lowerCaseRegEx = /[a-z]/;
    const adjustedShift = shift % 26;
    cArray.forEach((character) => {
        console.log(character)
        if (character.match(upperCaseRegEx)) {
            console.log("Upper case");
            console.log(character);
            const index = upperCaseArray.indexOf(character);
            console.log(index);
            encryptedString += upperCaseArray[(index + adjustedShift) % 26];
        } else if (character.match(lowerCaseRegEx)) {
            console.log("Lower case");
            console.log(character);
            const index = lowerCaseArray.indexOf(character)
            console.log(index);
            encryptedString += lowerCaseArray[(index + adjustedShift) % 26];
        } else {
            console.log("Foreign character");
            console.log(character);
            encryptedString += character;
        }
    })
    console.log(encryptedString)
    return encryptedString;
}

caesarCipher("fkkAwa.,", 7)