var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
var max = -999;
var maxIndex = 999;
var water = 0;

while (!(array[maxIndex] === 0)) {
    //find max, maxIndex
    array.forEach(function (element, index) {
        if (max < element) {
            max = element;
            maxIndex = index;
        }
    });
    //find element = 0
    array.forEach(function (el, index) {
        var biggerLeft;
        var biggerRight;
        if (el === 0) {
            //search for neighbors with left and right > 0
            if (el[index] < array[index + 1] && el[index] < array[index - 1]) {
                water += 1;
            } else {
                biggerRight = array.find(function (el, ind) {
                    return (el > 0 && ind < index);
                });
                if (biggerRight > 0) {
                    biggerLeft = array.find(function (el, ind) {
                        return (el > 0 && ind > index);
                    });
                    if (biggerLeft > 0) water += 1;
                }
            }
        }
    });
    //reduce all elements of the array by 1
    array = array.map(function (el) {
        el = el - 1;
        if (el < 0) el = 0;
        return el;
    });
}

alert(water);