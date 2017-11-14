function perform() {
    return new Promise(function (resolve) {
        var arg = perform.arguments[1];
        return resolve(arg(null));
    });
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