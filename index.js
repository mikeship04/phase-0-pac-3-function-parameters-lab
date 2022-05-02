function introduction(mike) {
    return `Hi, my name is ${mike}.`
}
function introductionWithLanguage(mike, javaScript) {
    return `Hi, my name is ${mike} and I am learning to program in ${javaScript}.`
}
function introductionWithLanguageOptional(mike, language = 'JavaScript') {
    return `Hi, my name is ${mike} and I am learning to program in ${language}.`;
}