function getShortMessages(messages) {
    return messages.map(obj => obj.message).filter(msg => msg.length < 50);
}

module.exports = getShortMessages;