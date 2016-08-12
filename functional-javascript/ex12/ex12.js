function Spy(target, method) {
    let spy = {count: 0};
    let fn = target[method];

    function spyTarget() {
        spy.count++;
        return fn.apply(this, arguments);
    }

    target[method] = spyTarget;

    return spy;
}

module.exports = Spy;