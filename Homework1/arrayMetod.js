// JavaScript Document
var array = [1,5,10,20,4];
var min = array[0];
var minIndex = 0;
var max = array[0];
var maxIndex = 0;
var sum = 0;

array.forEach(function (element, index) {
    if (max < element){
        max = element;
        maxIndex = index;
    }
    if (min > element){
        min = element;
        minIndex = index;
    }
    sum += element;
});

console.log(max);
console.log(min);
console.log(sum);

array[maxIndex] = min;
array[minIndex] = max;
console.log(array);

