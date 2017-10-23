var i = 0

function Dragonfly() {
    var appetite
    var health
    var humor
    var thirst
    var cleanliness
    var education
    var timeToEat
    this.create = function (name) {
        this.name = name || 'name';
        console.log('Hello, I am dragonfly, my name is - ' + this.name)
        appetite = 100
        health = 100
        humor  = 100
        thirst = 100
        cleanliness = 100
        education = 0
        this.timeToEat = setInterval(function () {
            console.log("Please, Give me the feed")
            i++
            if (i > 5) {
                health = health - 20
                humor = humor - 50
                appetite = appetite - 50
            }
        }, 2000)
    }
    this.eat = function (food) {
        var feed = ['mosquito', 'midge', 'fly']
        var provender = feed.find(function (el) {
            return el === food
        })
        if (provender) {
            console.log('Yummy')
            i = 0
        } else {
            console.log('Please, give me the ' + feed)
        }
        this.appetite = 100
    }
    this.die = function () {
        console.log('Farewell :(')
        delete dragon
        clearInterval(this.timeToEat)
    }
    this.info = function(){
        console.table([
            ['health', health],
            ['appetite', appetite],
            ['humor', humor],
            ['cleanliness', cleanliness],
            ['education', education],
            ['thirst', thirst]
        ])
    }
    this.help = function(){
        console.table([
            ['create(name)', 'the creation of a dragonfly'],
            ['eat(\'feed\')', 'feed, dragonfly eat mosquito, midge, fly'],
            ['info()', 'check parameters: health, appetite, humor and other'],
            ['drink()', 'give to drink water'],
            ['wash()', 'to wash'],
            ['lesson()', 'dragonfly is studying to fly']
        ])
    }
}

var dragon = new Dragonfly()
dragon.help()
