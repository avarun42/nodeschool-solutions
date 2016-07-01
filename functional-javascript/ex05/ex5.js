function checkUsersValid(goodUsers) {
    return submittedUsers => submittedUsers.every(submittedUser => goodUsers.some(goodUser => goodUser.id === submittedUser.id));
}

module.exports = checkUsersValid;