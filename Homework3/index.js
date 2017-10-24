var array = [1, 210, 100]
var str = ["white", "red", "black"]

//myForEach
Array.prototype.myForEach = function (myCellback) {
    for (var i = 0; i < this.length; i++) {
        myCellback(this[i], i, this)
    }
}
array.myForEach(function (el) {
    //console.log(el+10)
})

//myMap
Array.prototype.myMap = function (myCellback) {
    var Map = []
    for (var i = 0; i < this.length; i++) {
        Map[i] = myCellback(this[i])
    }
    return Map
}
var arr = array.myMap(function (el) {
    return el + 10
})
//console.log(arr)

//mySort
Array.prototype.mySort = function (myCellback) {
    var myCellback = function () {}
    var Sort = []
    var Max
    var length = this.length
    for (var c = 0; c < length; c++) {
        for (var i = 0; i < length - 1; i++) {
            if (myCellback(this[c], this[c + 1])) {
                Max = this[c]
                this[c] = this[c + 1]
                this[c + 1] = Max
            }
        }
        Sort[c] = this[c]
    }
    return Sort
}
var sort = array.mySort(function (prev, next) {
    return prev > next
})
var sortStr = str.mySort()
console.log(sort)
console.log(sortStr)