function debounce(callback, time) {
    var timer

    return function () {
        var args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            callback(args[0])
        }, time)
    }
}

document
    .querySelector('input[type="search"]')
    .addEventListener('input', debounce(function (event) {
        console.log(event.target.value)
    }, 250), false)
