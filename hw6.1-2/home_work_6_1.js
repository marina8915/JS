function client(name, second_name, status) {
    var userName = name || 'Anonym'
    var userStatus = status || 'usual'
    var SecondName = second_name || 'Anonym'
    var count = 0;
    this.Name = function () {
        console.log(userName)
    }

    this.SecondName = function () {
        console.log(userName)
    }

    this.Status = function () {
        console.log(userStatus)
    }

    return function () {
        console.log('user data : ' + '\n' + 'Second name : ' + SecondName + '\n' + 'Name : ' + userName + '\n' + 'Status : ' + userStatus + '\n' + 'Visits : ' + ++count)
    }

}

var client1 = new client('Lera', 'Briantseva', 'usual')
client1()
var client2 = new client('Marina', 'Bakum', 'usual')
client2()

