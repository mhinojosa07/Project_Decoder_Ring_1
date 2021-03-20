// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let al = "abcdefghijklmnopqrstuvwxyz".split("")
    let output = ""
    let loweredInput = input.toLowerCase()
    if(alphabet === undefined){
      return false
    }
    let alpha = alphabet.split("")
    if(alphabet.length != 26 || alpha.some(function(v,i,a){return a.lastIndexOf(v)!=i})) {
      return false
    }
    if(encode == true){
      for(let i = 0; i < loweredInput.length; i++){
        if(loweredInput[i].match(/[a-z]/i)) {
          for(let j = 0; j < al.length; j++){
            if(loweredInput[i] === al[j]){
              let c = alpha[j]
              output += c
            }
          }
        }
        else{
          output += loweredInput[i]
        }
      }
    }
    else if(encode == false){
      for(let i = 0; i < loweredInput.length; i++){
        if(loweredInput[i] === " "){
          output += loweredInput[i]
        }
        else{
          for(let j = 0; j < alpha.length; j++){
            if(loweredInput[i] === alpha[j]){
              let c = al[j]
              output += c
            }
          }
        }
      }
    }
    return output
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;