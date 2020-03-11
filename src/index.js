const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const space = "**********";

function decode(expr) {
  let result = "";
  let substring = "";
  let letter;
  for (let i=0; i < expr.length; i+=10) {
    letter = "";
    substring = expr.slice(i, i+10).trim("0");
    if (substring == space) {
      result+=" ";
      continue;
    };
    for (let j=0; j<10; j+=2) {
      let part = substring.slice(j, j+2);
      if (part == "10") {
        letter+=".";
      }
      else if (part == "11") {
        letter+="-";
      };
    };
  result+=MORSE_TABLE[letter];
  };
  return result;
};

module.exports = {
    decode
}
