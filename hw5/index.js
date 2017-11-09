function onLoadFunct() {

    var click = document.getElementById('submit')
    var n = 0
    if (click) {
        click.addEventListener('click', function (event) {
            event.stopPropagation()
            n += 1
            var el = document.createElement("li")
            el.id = n
            el.innerHTML = '<input type="checkbox" id="check' + n + '">' + document.getElementById("todo").value
            list.insertBefore(el, list.childNodes[0])
            document.getElementById("todo").value = ""
        }, false)
    }

    //bag not new list
    var checked = document.getElementById('checked')
    if (checked) {
        checked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function (el) {
                var elems = document.getElementById('list').getElementsByTagName('li')
                for (var i = 0; i < elems.length; i++) {
                    var idLi = elems[i].getAttribute('id')
                    var idCheck = "check" + idLi
                    var li = document.getElementById(idCheck)
                    if (li.checked) {
                        document.getElementById("select").appendChild(elems[i])
                    }
                }
            }, false)
        })
    }

    //bag not new list
    var unchecked = document.getElementById('unchecked')
    if (unchecked) {
        unchecked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function (el) {
                var unElems = document.getElementById('list').getElementsByTagName('li')
                for (var i = 0; i < unElems.length; i++) {
                    var idLi = unElems[i].getAttribute('id')
                    var idCheck = "check" + idLi
                    var li = document.getElementById(idCheck)
                    if (li.checked === false) {
                        document.getElementById("unselect").appendChild(unElems[i])
                    }
                }
            }, false)
        })
    }
}
