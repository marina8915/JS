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
        }, false)
    }

    var checked = document.getElementById('checked')
    if (checked) {
        checked.addEventListener('click', function (event) {
            event.stopPropagation()
            var elems = document.getElementById('list').getElementsByTagName('li')
            for (var i = 0; i < elems.length; i++) {
                var idLi = elems[i].getAttribute('id')
                var idCheck = "check" + idLi
                var el = document.getElementById(idCheck)
                if (el.checked) {
                    document.getElementById("select").appendChild(elems[i])
                }
            }
        })
    }
}
