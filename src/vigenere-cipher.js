const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  encrypt(message, key) {
    message = message.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let messageCodes = [],
        keys = key.toUpperCase(),
        j=0;

    if(!this.mode) {
      message = message.split("").reverse();
    }
    for(let i = 0; i < message.length; i++){
           if(alphabet.includes(message[i])){
                let index = ((alphabet.indexOf(message[i])+alphabet.indexOf(keys[j]))%26);
                let tmp = alphabet[index];
                messageCodes.push(tmp);
                j++;
                if (j == keys.length) {
                  j = 0;
                }
           } else {
             messageCodes.push(message[i]);
           }
}
    return messageCodes.join('');
}

decrypt(message, key) {
  message = message.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let messageCodes = [],
        keys = key.toUpperCase(),
        j = 0;

    if(!this.mode) {
      message = message.split("").reverse();
    }
    
    for(let i = 0; i < message.length; i++){
            if(alphabet.includes(message[i])){
               let index = (((alphabet.indexOf(message[i])-alphabet.indexOf(keys[j]))+26)%26);
               let tmp = alphabet[index];
               messageCodes.push(tmp);
                j++;
                if(j == keys.length) {
                  j = 0;
                }
            } else {
              messageCodes.push(message[i]);      
            }
    }
            return messageCodes.join("");
}
constructor(mode = true){
    this.mode = mode;
    return this.mode;
 }
}

module.exports = VigenereCipheringMachine;
