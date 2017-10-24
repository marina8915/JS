function Dragonfly() {
    var appetite
    var health
    var humor
    var thirst
    var cleanliness
    var education
    var ignorEat = 0
    var ignoreDrink = 0
    var ignoreStudy = 0
    var ignoreWash = 0

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
        appetite = 80
        health = 100
        humor = 80
        thirst = 100
        cleanliness = 100
        education = 0
        life()
    }
    this.eat = function (food) {
        var feed = ['mosquito', 'midge', 'fly']
        var provender = feed.find(function (el) {
            return el === food
        })
        if (appetite === 100) {
            console.log('Thank you, I don`t want to eat')
        } else {
            if (provender) {
                console.log('Yummy')
                appetite += 20
                thirst -= 10
                humor += 10
                health += 10
                ignorEat = 0
            } else {
                console.log('Please, give me the ' + feed)
            }
        }

        life()

    }
    this.drink = function () {
        if (thirst === 100) console.log('Thank you, I don`t want to drink')
        console.log('Thank you')
        thirst += 20
        humor += 10
        health += 10
        cleanliness -= 10
        ignoreDrink = 0
        life()
    }
    this.lesson = function () {
        console.log('I like to fly')
        education += 10
        appetite -= 20
        health += 30
        cleanliness -= 20
        humor += 20
        ignoreStudy = 0
        console.log('I want to wash')
        ignoreWash++
        if (ignoreWash > 2) {
            health -= 10
            humor -= 50
            cleanliness -= 20
        }
        life()
    }
    this.wash = function () {
        if (thirst === 100) {
            console.log('Thank you, I don`t want to wash')
        } else {
            console.log('Thank you')
            cleanliness += 20
            health += 20
            humor += 20
            ignoreWash = 0
        }
        life()
    }

    function life() {
        if (health <= 0) die()
        if (humor <= 0 || appetite <= 0 || thirst <= 0 || cleanliness <= 0) {
            health -= 50
            humor -= 50
        }
        if (appetite < 100) {
            console.log("Please, give me the feed")
            ignorEat++
        }
        if (ignorEat > 3) {
            health -= 20
            humor -= 20
            appetite -= 10
        }
        if (thirst < 100) {
            console.log("Please, give me the water")
            ignoreDrink++
        }
        if (ignoreDrink > 5) {
            health -= 20
            humor -= 20
            thirst -= 10
        }
        if (health < 50 && health !== 0) {
            console.log("I want to study")
            ignoreStudy++
        }
        if (ignoreStudy > 2) {
            health -= 10
            humor -= 10
        }
        if (humor < 100) {
            console.log("I want to study")
            ignoreStudy++
        }
        if (health < 20) setTimeout(die, 20000)
    }

    function die() {
        console.log('Farewell :(')
        dragon = null
    }

    this.info = function () {
        console.table([
            ['health', health],
            ['appetite', appetite],
            ['humor', humor],
            ['cleanliness', cleanliness],
            ['education', education],
            ['thirst', thirst]
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