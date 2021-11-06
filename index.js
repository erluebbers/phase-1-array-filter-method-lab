function findMatching (array, name) {
    const matchedDriver = array.filter(function (element) {
        return element.toLowerCase() === name.toLowerCase()
    })
    return matchedDriver
}
function fuzzyMatch (array, string) {
    const foundDriver = array.filter( function (element) {
        return element[0] === string[0] && element[1] === string[1]
    })
    return foundDriver
}
function matchName (array, string) {
    const driverList = array.filter(function (element) {
        return element.name === string
    })
    return driverList
}