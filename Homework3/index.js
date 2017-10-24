var array = [1,3]



Array.prototype.myForEach=function(el,index){
    for (var i = 0; i < array.length; i++) {
        el = array[i]++
        index = i
    }
}
array.myForEach()
 console.log(array.__proto__['get arguments'])