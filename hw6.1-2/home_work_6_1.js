function Client(name, second_name, status) {
    var userName = name || 'Anonym'
    var userStatus = status || 'usual'
    var secondName = second_name || 'Anonym'
    var count = 0
	var allInfo = ''
    
    this.name = function () {
        return console.log('Name: ' + userName + ' ' + secondName)
    }
    this.changeName = function (name, second_name) {
        userName = name
        secondName = second_name
        return console.log('New name: ' + userName + ' ' + secondName)
    }
    this.status = function () {
        return console.log('Status : ' + userStatus)
    }
    this.changeStatus = function (status) {
        userStatus = status
        return console.log('New status : ' + userStatus)
    }
    this.count = function () {
        return console.log('Visits : ' + count++)
    }
    this.info = function () {
        allInfo = 'user data: \nSecond name: ' + secondName + '\nName: ' + userName + '\nStatus : ' + userStatus + '\nVisits : ' + ++count
        console.log(allInfo)
    }
    return this
}

var client1 = new Client('Lera', 'Briantseva', 'usual')
client1.name()
client1.changeName('Marina', 'Bakum')
client1.name()
client1.status()
client1.changeStatus('special')
client1.status()
client1.info()
client1.count()
