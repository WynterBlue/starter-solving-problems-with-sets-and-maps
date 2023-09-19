/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbersMap = new Map()
    const solutionMap = new Map()

    for (const element of A){
        numbersMap.set(element)
    }

    for (const element of A){
        const difference = N - element
        if (difference !== element) {
            if(numbersMap.has(difference)){
                if(element < difference){
                    solutionMap.set(element, difference)
                }else{
                    solutionMap.set(difference, element)
                }
            }
        }
    }
    const result = [...solutionMap]
    return result
}

module.exports = sumPairs;
