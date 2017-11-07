function onLoadFunct() {
    var click = document.getElementById('submit')
    if (click) {
        click.addEventListener('click', function (event) {
            event.stopPropagation()
            var el = document.createElement("li")
            el.innerHTML = '<input type="checkbox" class="check">' + document.getElementById("todo").value
            list.insertBefore(el, list.childNodes[0])
        }, false)
    }

    var checked = document.getElementById('checked')
    if (checked) {
        checked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByClassName("check"), function (el) {
                if (el.checked) {
                        select.insertBefore(el, select.childNodes[0])
                }
            })
        }, false)
    }
}
