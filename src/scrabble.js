const letters = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1, 
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4, 
    Z: 10
}

function scrabble(word) {
    let total = 0
    let multiplier = 1
    if (word !== null) {
        word = word.toUpperCase()
        if (checkWordValid(word)) {
            for (let i = 0; i < word.length; i++) {
                multiplier = applyMultiplier(word[i], multiplier)
                total += calculateLetterScore(word[i]) * multiplier
            }
        }
    }
    return total
}

function applyMultiplier(symbol, multiplier) {
    if (symbol === '[') {
        multiplier = multiplier * 3
    } else if (symbol === '{') {
        multiplier = multiplier * 2
    } else if (symbol === ']') {
        multiplier = multiplier / 3
    } else if (symbol === '}') {
        multiplier = multiplier / 2
    }
    return multiplier
}

function checkWordValid(word) {
    return checkValidMultipliers(word) && checkValidCharacters(word)
}

function checkValidCharacters(word) {
    let valid = true
    const validCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[]{}'
    for (let i = 0; i < word.length; i++) {
        if (!validCharacters.includes(word[i])) 
        {
            valid = false
        }
    }
    return valid
}

function checkValidMultipliers(word) {
    return checkValidDoubler(word) && checkValidTripler(word)
}

function checkValidDoubler(word) {
    let valid = true
    let doubleOpener = false
    let doubleCloser = false
    doubleOpener = word.includes('{')
    doubleCloser = word.includes('}')    
    if (doubleOpener || doubleCloser) {
        valid = doubleOpener && doubleCloser
    }
    return valid
}

function checkValidTripler(word) {
    let valid = true
    let tripleOpener = false
    let tripleCloser = false
    tripleOpener = word.includes('[') 
    tripleCloser = word.includes(']')
    if (tripleOpener || tripleCloser) {
        valid = tripleOpener && tripleCloser
    }
    return valid
}

function calculateLetterScore(letter) {
    if (letter in letters) {
        return letters[letter]
    }
    return 0
}


module.exports = scrabble
