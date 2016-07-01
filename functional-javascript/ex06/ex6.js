function countWords(inputWords) {
    return inputWords.reduce((countedWords, cur) => {
        countedWords[cur] = countedWords[cur] ? ++countedWords[cur] : 1;
        return countedWords;
    }, {});
}

module.exports = countWords;