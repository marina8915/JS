var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
var water = 0;
var sum = 100;

while (sum > 0) {
    //find element = 0
    array.forEach(function (el, index) {
        var biggerLeft;
        var biggerRight;
        if (el === 0) {
            //search for neighbors with left and right > 0
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
    });
    //reduce all elements of the array by 1
    array = array.map(function (el) {
        el = el - 1;
        if (el < 0) el = 0;
        return el;
    });
    //find sum of elements
    sum = array.reduce(function (sum, el) {
        return sum + el;
    }, 0);
}

alert(water);