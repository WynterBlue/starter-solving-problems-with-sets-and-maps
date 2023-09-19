/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const resultsMap = new Map()

    for (const word of words){
        const wordSet = new Set(word.toLowerCase())
        const wordArray = [...wordSet].sort()
        const newString = wordArray.join('')

        if(resultsMap.has(newString)){
            resultsMap.get(newString).push(word)
        }else{
            resultsMap.set(newString, [word])
        }
    }
    return resultsMap
}

module.exports = sameLetters;
