function Client(name, second_name, status) {
    var userName = name || 'Anonym'
    var userStatus = status || 'usual'
    var SecondName = second_name || 'Anonym'
    var count = 0;
    this.name = function () {
        console.log(userName)
    }

    this.secondName = function () {
        console.log(userName)
    }

    this.status = function () {
        console.log(userStatus)
    }

    return function () {
        console.log('user data : \n Second name : ' + SecondName + 
                    '\n Name : ' + userName 
                    + '\n Status : ' + userStatus
                    + '\n Visits : ' + ++count)
    }
}

var client1 = new Client('Lera', 'Briantseva', 'usual')
client1()
var client2 = new Client('Marina', 'Bakum', 'usual')
client2()

