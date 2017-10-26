function Dragonfly() {
    var ignorEat = 0
    var ignoreDrink = 0
    var ignoreStudy = 0
    var ignoreWash = 0
    var maxLimit = 200
    var minLimit = 0
    var dragonParameters = {}

    var create
    var eat
    var drink
    var lesson
    var wash
    var info
    var help

    this.create = function (name) {
        this.name = name || 'name';
        console.log('Hello, I am dragonfly, my name is ' + this.name)
        dragonParameters.appetite = 80
        dragonParameters.health = 100
        dragonParameters.humor = 80
        dragonParameters.thirst = 100
        dragonParameters.cleanliness = 100
        dragonParameters.education = 0
        life()
    }
    this.eat = function (food) {
        var feed = ['mosquito', 'midge', 'fly']
        var provender = feed.find(function (el) {
            return el === food
        })
        if (dragonParameters.appetite === 100) {
            console.log('Thank you, I don`t want to eat')
        } else {
            if (provender) {
                console.log('Yummy')
                dragonParameters.appetite += 20
                dragonParameters.thirst -= 10
                dragonParameters.humor += 10
                dragonParameters.health += 10
                ignorEat = 0
            } else {
                console.log('Please, give me the ' + feed)
            }
        }
        life()
    }
    this.drink = function () {
        if (dragonParameters.thirst === 100) console.log('Thank you, I don`t want to drink')
        console.log('Thank you')
        dragonParameters.thirst += 20
        dragonParameters.humor += 10
        dragonParameters.health += 10
        dragonParameters.cleanliness -= 10
        ignoreDrink = 0
        life()
    }
    this.lesson = function () {
        console.log('I like to fly')
        dragonParameters.education += 10
        dragonParameters.appetite -= 20
        dragonParameters.health += 30
        dragonParameters.cleanliness -= 20
        dragonParameters.humor += 20
        ignoreStudy = 0
        console.log('I want to wash')
        ignoreWash++
        if (ignoreWash > 2) {
            dragonParameters.health -= 10
            dragonParameters.humor -= 50
            dragonParameters.cleanliness -= 20
        }
        life()
    }
    this.wash = function () {
        if (dragonParameters.thirst === 100) {
            console.log('Thank you, I don`t want to wash')
        } else {
            console.log('Thank you')
            dragonParameters.cleanliness += 20
            dragonParameters.health += 20
            dragonParameters.humor += 20
            ignoreWash = 0
        }
        life()
    }

    function life() {
        if (dragonParameters.humor <= 0 || dragonParameters.appetite <= 0 || dragonParameters.thirst <= 0 || dragonParameters.cleanliness <= 0) {
            dragonParameters.health -= 50
            dragonParameters.humor -= 50
        }
        if (dragonParameters.appetite < 100) {
            console.log("Please, give me the feed")
            ignorEat++
        }
        if (ignorEat > 3) {
            dragonParameters.health -= 20
            dragonParameters.humor -= 20
            dragonParameters.appetite -= 10
        }
        if (dragonParameters.thirst < 100) {
            console.log("Please, give me the water")
            ignoreDrink++
        }
        if (ignoreDrink > 5) {
            dragonParameters.health -= 20
            dragonParameters.humor -= 20
            dragonParameters.thirst -= 10
        }
        if (dragonParameters.health < 50 && dragonParameters.health !== 0) {
            console.log("I want to study")
            ignoreStudy++
        }
        if (ignoreStudy > 2) {
            dragonParameters.health -= 10
            dragonParameters.humor -= 10
        }
        if (dragonParameters.humor < 100) {
            console.log("I want to study")
            ignoreStudy++
        }
        if (dragonParameters.health < 20) setTimeout(die, 20000)
        if (dragonParameters.health <= 0) die()
        Check()
    }

    function Check() {
        for (var key in dragonParameters) {
            if (dragonParameters[key] > maxLimit) return dragonParameters[key] = maxLimit
            if (dragonParameters[key] < minLimit) return dragonParameters[key] = minLimit
        }
    }

    function die() {
        console.log('Farewell :(')
        dragon = null
    }

    this.info = function () {
        console.table([
            ['health', dragonParameters.health],
            ['appetite', dragonParameters.appetite],
            ['humor', dragonParameters.humor],
            ['cleanliness', dragonParameters.cleanliness],
            ['education', dragonParameters.education],
            ['thirst', dragonParameters.thirst]
        ])
    }
    this.help = function () {
        console.table([
            ['dragon.create(\'name\')', 'the creation of a dragonfly'],
            ['dragon.eat(\'feed\')', 'feed, dragonfly eat mosquito, midge, fly'],
            ['dragon.info()', 'check parameters: health, appetite, humor and other'],
            ['dragon.drink()', 'give to drink water'],
            ['dragon.wash()', 'to wash'],
            ['dragon.lesson()', 'dragonfly is studying to fly']
        ])
    }
}

var dragon = new Dragonfly()
dragon.help()