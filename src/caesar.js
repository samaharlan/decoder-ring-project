// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//ASCII ALPHABET IS 97 - 122

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // If shift not provided, or more than 25 in either direction
    if(!shift || Math.abs(shift) > 25) {
      return false;
    }
    
    return input.toLowerCase().split("").map((letter) => {
      let charCode = letter.charCodeAt(0);
      let amountToShift = shift;
      if (!encode) {
        amountToShift *= -1;
      }
    
      if (charCode >= 97 && charCode <= 122) {
        let offset = 97;
        let shiftedCharCode = ((charCode - offset + amountToShift + 26) % 26) + offset;
        let newLetter = String.fromCharCode(shiftedCharCode);
        return newLetter;
      } else {
        return letter;
      }
    }).join("");
  }
  
  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };