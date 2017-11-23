function Client(name, secondName, status) {
    var userName = 'Name : ' + (name || 'Anonym');
    var userStatus = 'Status : ' + (status || 'usual');
    var userSecondName =  'Second name : ' + (secondName || 'Anonym');
    var  all_data = '';

    function newName (name) {
        if((name !== '') && (name)){
            userName = 'Name : ' + name;}
        return userName;
    };

    function funcNewSecondName (secondName) {
        if((secondName !== '') && (secondName)){
            userSecondName = 'Second name : ' + secondName;}
        return  userSecondName;
    };

    function funcNewStatus (status) {
        if((status !== '') && (status)){
            userStatus = 'Status : ' + status;}
        return userStatus
    };

    return {
        funcName: function (name) {
            return console.log(newName(name));
        },
        funcStatus: function (status) {
            return console.log(funcNewStatus(status));
        },
        funcSecondName: function (secondName) {
            return console.log(funcNewSecondName(secondName));
        },
        funcAll: funcAllData = function () {
            allData = 'user data : \n' + userSecondName + '\n' + userName + '\n' + userStatus;
            console.log(allData)
        }
    }
}

var client1 = new Client('Lera', 'Briantseva', 'usual');
client1.funcAll();
client1.funcName();
client1.funcName('Kate');
client1.funcName('');
var client2 = new Client('Marina', 'Bakum', 'usual');
client2.funcSecondName('');
client2.funcName('Inna');
client2.funcName();
