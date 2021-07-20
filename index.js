// Your code here
function saturdayFun(someFun = 'roller-skate') {
    return `This Saturday, I want to ${someFun}!`
}
saturdayFun('bathe my dog')

function mondayWork(notFun = 'go to the office') {
    return `This Monday, I will ${notFun}.`
}

function wrapAdjective(flair = '*'){
    return function(adjective = 'special'){
        return `You are ${flair}${adjective}${flair}!`;
    }
}
const wrapSlash = wrapAdjective('slash')
console.log(wrapSlash)
console.log(wrapSlash('string'))