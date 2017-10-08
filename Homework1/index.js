// JavaScript Document
function inputArray() {
    var array = document.getElementById("array").value;  //read input
    array = array.split(','); //transform into an array
    //delete empty element
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            if (array[i] === 0) {
            } else {
                array.splice(i, 1);
                i--;
            }
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
    var Max = -1/0; //-infinity
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number") {
            if (Max < array[i]) Max = array[i];
        }
    }
    //check if in array is no numbers Max = undefined
    if (Max == -Infinity) {
        Max = undefined;
    }
    //Min
    var Min = 1 / 0; //infinity
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number") {
            if (Min > array[i]) Min = array[i];
        }
    }
    //check if in array is no numbers Min = undefined
    if (Min == Infinity) {
        Min = undefined;
    }
    //output Array, Sum, Max, Min
    document.getElementById('result').innerHTML = ('Array: ' + array + '\n Sum = ' + Sum + '\n Max = ' + Max + '\n Min = ' + Min);
}
