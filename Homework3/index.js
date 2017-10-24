var array = [1, 3]

//myForEach
Array.prototype.myForEach = function (myCell) {
    for (var i = 0; i < this.length; i++) {
        myCell(this[i], i, this)
    }

}
array.myForEach(function (el) {
    //console.log(el+10)

})

//myMap
Array.prototype.myMap = function (myCell) {
    var Map = []
    for (var i = 0; i < this.length; i++) {
        Map[i] = myCell(this[i])
    }
    return Map
}
var arr = array.myMap(function (el) {
    return el + 10
})

console.log(arr)
