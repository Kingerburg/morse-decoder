const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrExpr = [];
    if (expr.length === 0) {
        return '';
    }

    let currExpr = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            if (currExpr) {
                arrExpr.push(currExpr);
                currExpr = '';
            }
            arrExpr.push(' ');
            continue;
        }
        currExpr += parse(expr, i);
    }
    if (currExpr) {
        arrExpr.push(currExpr);
    }
    return arrExpr.join('')

}
//test
function parse(expr, i) {
    let str = '';
    for (let j = i + 9; j >= i; j -= 2) {
        if (expr[j] === '1') {
            str = '-' + str;
        } else {
            if (expr[j - 1] === '1') {
                str = '.' + str;
            } else {
                break;
            }
        }
    }
    return MORSE_TABLE[str];
}

module.exports = {
    decode
}