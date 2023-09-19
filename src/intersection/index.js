function intersection(a, b) {
    const newMap = new Map()
    const newSet = new Set()

    for (const element of a){
        // newMap.set(element, (newMap.get(element) || 0) + 1)
        newMap.set(element)
    }

    for(const element of b){
        if(newMap.has(element)){
            newSet.add(element)
        }
    }
    const result = [...newSet]
    return result
}

module.exports = intersection;
