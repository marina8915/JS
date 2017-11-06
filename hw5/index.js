function  Click() {
    document.getElementById('submit').addEventListener('click', function (event) {
        var el = document.createElement("li")
        el.innerHTML = document.getElementById("todo").value
       // document.getElementById("list").appendChild(el)
        list.insertBefore(el, list.childNodes[0])
        event.stopPropagation()
    }, false)
} 