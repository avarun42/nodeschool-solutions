function onComplete(streamResults, numStreams) {
    if (streamResults.reduce((prev, cur) => prev || cur === null, false)) {
        return;
    }

    streamResults.forEach(val => console.log(val));
}

module.exports = onComplete;