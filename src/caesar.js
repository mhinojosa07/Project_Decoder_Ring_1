// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function (str, shift) {
  // you can add any code you want within this function scope
  let caesar = function (input, shift, encode = true) {
    // check if the function is to encode or decode the message
    if(encode == false) {
      shift = -shift
    }
    // chech if the shift follows the proper caesar cipher rules
    if(shift === 0 || shift < -25 || shift > 25 || shift === undefined){
      return false
    }
    // Wrap the amount so it doesn't go outside ASCII letters
    let newInput = input.toLowerCase()
    if (shift < 0) {
      return caesar(newInput, shift + 26)
    }
    let output = ""
    // Go through each character, check if it's a letter then shift as needed
    for (let i = 0; i < newInput.length; i++) {
      let c = newInput[i]
      if (c.match(/[a-z]/i)) {
        let code = newInput.charCodeAt(i)
        if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + shift) % 26) + 97)
        }
      }
      output += c
    }
    return output
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
