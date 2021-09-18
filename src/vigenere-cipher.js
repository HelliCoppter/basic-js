import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
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
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
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
