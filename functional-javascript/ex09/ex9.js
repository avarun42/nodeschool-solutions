function logger(namespace) {    
    return (...args) => console.log.apply(null, [namespace, ...args]);
}

module.exports = logger;