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

function decode(expr) {
    var i = 0;
	var newBits = "";
    var morseCode = [];

    for ( i = 0; i < expr.length; i+=10) {
        morseCode.push(expr.slice(i, i + 10));
    }
    
    for(i = 0; i < morseCode.length; i++){
        morseCode[i]+= ' ';
    }
    morseCode = morseCode.join('');

	while (i <= morseCode.length){
		newBits = morseCode.replace('**********', '   ').replace('10', '.').replace('11', '-').replace('00', '').replace('00000000','');
		morseCode = newBits; 
		i++;  
	}
 
    decodeWord = function(morseWord) {
        var morseSegments = morseWord.split(" ");
        var decodedSegments = [];
        var sLength = morseSegments.length;

        for (var i = 0; i < sLength; i++) {
            if (morseSegments[i] in MORSE_TABLE) {
                decodedSegments += MORSE_TABLE[morseSegments[i]];
            }
        }
        return decodedSegments;
    };
    
    var morseWords = morseCode.split("   ");
    var mLength = morseWords.length;
    var decodedMessage = "";
    for (var i = 0; i < mLength; i++) {
        var decodedWord = decodeWord(morseWords[i]);
        decodedMessage += decodedWord + " ";
    }
    return decodedMessage.trim();
}

module.exports = {
    decode
}