var array = [1, 4, 6, 5, 4, 5, 10, 3, 3]
var str = ["white", "red", "black"]

//myForEach
Array.prototype.myForEach = function (myForEach) {
    for (var i = 0; i < this.length; i++) {
        myForEach(this[i], i, this)
    }
}
array.myForEach(function (el) {
    //console.log(el+10)
})

//myMap
Array.prototype.myMap = function (myMap) {
    var Map = []
    for (var i = 0; i < this.length; i++) {
        Map[i] = myMap(this[i])
    }
    return Map
}
var arr = array.myMap(function (el) {
    return el + 10
})
//console.log(arr)

//mySort
Array.prototype.mySort = function (mySort) {
    var mySort = mySort || function (a, b) {
            return a > b
        }
    var max
    var Sort = []
    var length = this.length
    for (var i = 0; i < length - 1; i++) {
        for (var c = 0; c < length - i - 1; c++) {
            if (mySort(this[c], this[c + 1])) {
                max = this[c]
                this[c] = this[c + 1]
                this[c + 1] = max
            }
        }
    }
    return this
}
var sort = array.mySort(function (a, b) {
    return a > b
})
var sortStr = str.mySort()
console.log(sort)
console.log(sortStr)

sort = array.mySort(function (a, b) {
    if (a > b) return 1
    if (a < b) return -1
    return 0
})
console.log(sort)

sort = array.mySort(function (a, b) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
})
console.log(sort)
