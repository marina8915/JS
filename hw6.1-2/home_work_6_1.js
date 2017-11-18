function Client(name, second_name, status) {
    var userName = name || 'Anonym'
    var userStatus = status || 'usual'
    var secondName = second_name || 'Anonym'
    this.name = function () {
        return console.log('Name: ' + userName + ' ' + secondName)
    }
    this.status = function () {
        return console.log('Status : ' + userStatus)
    }
	return this
}

var client1 = new Client('Lera', 'Briantseva', 'usual')
client1.name()
var client2 = new Client('Marina', 'Bakum', 'usual')
client2.status()
