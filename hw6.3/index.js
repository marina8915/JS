function perform() {
    var arg2 = perform.arguments[1];
    var result = arg2(perform.arguments[0]);
    this.then = function (arg2) {
        return perform(result, arg2);
    }
    return this;
}


perform(null, function (value) { // value === null
    var param = 1;
    console.log(value);
    console.log(param); // 1
    return param;
})
    .then(function (param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function (param) { // param === 2
        console.log(++param); // 3
        return param;
    });
