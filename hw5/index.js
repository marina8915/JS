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

    var all = document.getElementById('all')
    if (all) {
        all.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                el = document.getElementById('select').getElementsByTagName('li')
                for (var i = 0; i < el.length; i++) {
                    document.getElementById("list").appendChild(el[i])
                }
                el = document.getElementById('unselect').getElementsByTagName('li')
                for ( i = 0; i < el.length; i++) {
                    document.getElementById("list").appendChild(el[i])
                }
                el = document.getElementById('list').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    document.getElementById("list").appendChild(el[i])
                }
            }, false)
        })
    }
    var checked = document.getElementById('checked')
    if (checked) {
        checked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                el = document.getElementById('list').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    var idLi = el[i].getAttribute('id')
                    var idCheck = "check" + idLi
                    var li = document.getElementById(idCheck)
                    if (li.checked) {
                        document.getElementById("select").appendChild(el[i])
                    }
                }
            el = document.getElementById('unselect').getElementsByTagName('li')
            for (i = 0; i < el.length; i++) {
                idLi = el[i].getAttribute('id')
                idCheck = "check" + idLi
                li = document.getElementById(idCheck)
                if (li.checked) {
                    document.getElementById("select").appendChild(el[i])
                }
            }
        }, false)
        })
    }

    var unchecked = document.getElementById('unchecked')
    if (unchecked) {
        unchecked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                var unElems = document.getElementById('list').getElementsByTagName('li')
                for (i = 0; i < unElems.length; i++) {
                    idLi = unElems[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked === false) {
                        document.getElementById("unselect").appendChild(unElems[i])
                    }
                }
            unElems = document.getElementById('select').getElementsByTagName('li')
            for (i = 0; i < unElems.length; i++) {
                idLi = unElems[i].getAttribute('id')
                idCheck = "check" + idLi
                li = document.getElementById(idCheck)
                if (li.checked === false) {
                    document.getElementById("unselect").appendChild(unElems[i])
                }
            }
        }, false)
        })
    }
}
