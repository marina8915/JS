var array = [1,3]

Array.prototype.myForEach = function (myCell) {
    for (var i = 0; i < this.length; i++) {
        myCell(this[i], i, this)
    }

}
array.myForEach(function (el) {
    console.log(el+10)

})
