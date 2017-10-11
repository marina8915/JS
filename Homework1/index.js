// JavaScript Document
function inputArray() {
    var array = [true, NaN, , 1000];
    var Sum = 0;
    //conferment Min, Max
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number" & !isNaN(array[i])) {
            var Max = array[i];
            var Min = array[i];
            break;
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (i in array & typeof(array[i]) === "number" & !isNaN(array[i])) { //rejection empty element, boollean, NaN
            Sum = Sum + array[i];
            if (Max < array[i]) Max = array[i];
            if (Min > array[i]) Min = array[i];
        }
    }
    //output Array, Sum, Max, Min
    document.getElementById('result').innerHTML = ('Array: ' + array + '\n Sum = ' + Sum + '\n Max = ' + Max + '\n Min = ' + Min);
}
