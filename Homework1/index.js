// JavaScript Document
function inputArray() {
    var array1 = [1,NaN,3,5,-3, ,];
    //delete empty element
    var array = [];
    for (var i = 0; i < array1.length; i++) {
        if (i in array1) {
            array.push(array1[i]);
        }
    }
    //Sum
    var Sum = 0;
    for (var i = 0; i < array.length; i++) {
        array[i] = +array[i]; //transform into numbers
        if (!isNaN(array[i])) {
            Sum = Sum + array[i];
        }
    }
    //Max
    var Max = null;
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number") {
            if (Max < array[i]) Max = array[i];
        }
    }
    //Min
    var Min = null;
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number") {
            if (Min > array[i]) Min = array[i];
        }
    }
    //output Array, Sum, Max, Min
    document.getElementById('result').innerHTML = ('Array: ' + array + '\n Sum = ' + Sum + '\n Max = ' + Max + '\n Min = ' + Min);
}
