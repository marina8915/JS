var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
var max = array[0];
var maxIndex = 0;
var water = 0;

while (!(array[maxIndex] === 0)) {
    array.forEach(function (element, index) {
        if (max < element) {
            max = element;
            maxIndex = index;
        }
    });
    console.log(max);
    console.log(maxIndex);
    array.forEach(function (el, index) {
        var bigger;
        var big;
        if (el === 0) {
            if (el[index] < array[index + 1] && el[index] < array[index - 1]) {
                water += 1;
            } else {
                bigger = array.find(function (el, ind) {
                    return (el > 0 && ind < index);
                });
                if (bigger > 0) {
                    big = array.find(function (el, ind) {
                        return (el > 0 && ind > index);
                    });
                    if (big > 0) water += 1;
                }
            }
        }
    });
    array = array.map(function (el) {
        el = el - 1;
        if (el < 0) el = 0;
        return el;
    });
}

alert(water);