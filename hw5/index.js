function onLoadFunct() {
    //event for button submit
    var click = document.getElementById('submit')
    var n = 0 //variable for assign an id
    if (click) {
        click.addEventListener('click', function (event) {
            event.stopPropagation()
            n += 1
            //create item in list
            var el = document.createElement("li")
            el.id = n
            var del = '<p id="del' + n + '" onclick="Del(' + n + ')">delete</p>'
            //check if input empty -> ignore
            var value = -document.getElementById("item").value
            if (value !== -0) {
                el.innerHTML = '<input type="checkbox" id="check' + n + '">' + document.getElementById("item").value + del
                list.insertBefore(el, list.childNodes[0])
            }
            //reset input
            document.getElementById("item").value = ""
        }, false)
    }
    //event for button all
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
                for (i = 0; i < el.length; i++) {
                    document.getElementById("list").appendChild(el[i])
                }
                el = document.getElementById('list').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    document.getElementById("list").appendChild(el[i])
                }
            }, false)
        })
    }
    //event for button checked
    var checked = document.getElementById('checked')
    if (checked) {
        checked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                //find selected element in list
                el = document.getElementById('list').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    var idLi = el[i].getAttribute('id')
                    var idCheck = "check" + idLi
                    var li = document.getElementById(idCheck)
                    if (li.checked) {
                        document.getElementById("select").appendChild(el[i])
                    }
                }
                //find selected element in unselect
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
    //event for button unchecked
    var unchecked = document.getElementById('unchecked')
    if (unchecked) {
        unchecked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                //find unselected element in list
                el = document.getElementById('list').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked === false) {
                        document.getElementById("unselect").appendChild(el[i])
                    }
                }
                //find unselected element in unselect
                el = document.getElementById('select').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked === false) {
                        document.getElementById("unselect").appendChild(el[i])
                    }
                }
            }, false)
        })
    }
}

//delete item
function Del(id) {
    var el = document.getElementById(id)
    el.parentNode.removeChild(el)
}