// JavaScript Document
function inputArray() {
    var array = [1, NaN, 3, 5, -3, ,];
    var Sum = 0;
    var Max = null;
    var Min = null;
    for (var i = 0; i < array.length; i++) {
        if (i in array) { //rejection empty element
            array[i] = +array[i]; //transform into numbers
            if (!isNaN(array[i])) {
                Sum = Sum + array[i];
                if (Max < array[i]) Max = array[i];
                if (Min > array[i]) Min = array[i];
            }
        }
    }
    //output Array, Sum, Max, Min
    document.getElementById('result').innerHTML = ('Array: ' + array + '\n Sum = ' + Sum + '\n Max = ' + Max + '\n Min = ' + Min);
}
