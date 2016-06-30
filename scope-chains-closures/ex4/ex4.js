function foo() {
    quux = 7;
    function zip() {
        var quux;
        bar = true;
    }
    var bar;
    return zip;
}
