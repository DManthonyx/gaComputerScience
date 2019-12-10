![General Assembly](https://logo.clearbit.com/generalassemb.ly/?size=100)

# JavaScript - OOP Inheritance

## Lesson Objectives

1. Make a class inherit attributes from a "parent class"
1. Create static properties for a class
1. Create a factory

## Make a class inherit attributes from a "parent class"

Sometimes we want to have a "parent" class that will have some basic attributes that will be inherited by "child" classes. Here is our parent class. But what if we have a super hero amongst us that has all our human attributes and more?

```javascript
class Person {
  constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2
    this.arms = 2
    this.name = name
    this.age = age
    this.eyes = eyes
    this.hair = hair
    this.lovesCats = lovesCats
    this.lovesDogs = lovesDogs || true
  }
  greet(otherPerson) {
    console.log('hi ' + otherPerson + '!')
  }
  classyGreeting(otherClassyPerson) {
    console.log('Howdy ' + otherClassyPerson.name + '!')
  }
  setHair(hairColor) {
    this.hair = hairColor
  }
  walk() {
    console.log('I hate when my Segway is in the shop.')
  }
}
const supermanPerson = new Person('Clark Kent', 30, 'blue', 'black')
console.log(supermanPerson)
```

We could just copy paste the above and add what we need, but that's not sticking to the principal of DRY. Instead we can `extend` our Person class for our superhero

We can now add additional functionality:

```javascript
class SuperHero extends Person {
  fly() {
    console.log('Up up and away!')
  }
}
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(superman)
superman.walk()
superman.fly()
```

And we can override previous functionality:

```javascript
class SuperHero extends Person {
  fly() {
    console.log('Up up and away!')
  }
  greet(otherPerson) {
    console.log(`Greetings Earthl- Oops, I mean ${otherPerson}`)
  }
}
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
superman.greet('Bob')
```

We can even reference the parent class' method and extend its original functionality:

```javascript
class SuperHero extends Person {
  fly() {
    console.log('Up up and away!')
  }
  greet(otherPerson) {
    console.log('Greetings ' + otherPerson)
  }
  walk() {
    super.walk()
    this.fly()
  }
}
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
superman.walk()
```

This is most useful on the constructor:

```javascript
class SuperHero extends Person {
  constructor(name, age, eyes, hair) {
    super(name, age, eyes, hair)
    this.superPowers = [
      'flight',
      'superhuman strength',
      'x-ray vision',
      'heat vision',
      'cold breath',
      'super-speed',
      'enhanced hearing',
      'nigh-invulnerability',
    ]
  }
  fly() {
    console.log('Up up and away!')
  }
  greet(otherPerson) {
    console.log('Greetings ' + otherPerson)
  }
  walk() {
    super.walk()
    this.fly()
  }
}
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(superman)
```

`super` is another special keyword/function. Try mispelling it - and you'll see it won't have the same functionality.

---

# JavaScript - OOP Factories

## Create a factory

- Sometimes we need to have a factory object that will generate other objects
- The purpose of the factory is so it can control the creation process in some way
- This is usually a single object that exists throughout the program that performs a set of functions - also called a singleton

  Let's start with a car

```javascript
class Car {
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber
    this.maker = maker
  }
  drive() {
    console.log('Vroom Vroom')
  }
}

const newCar = new Car('Mazda', 12345)
console.log(newCar)
```

Now let's make a factory class that will make cars for us.

```javascript
class Factory {
  constructor(company) {
    this.company = company
    this.cars = []
  }
  generateCar() {
    const newCar = new Car(this.company, this.cars.length)
    this.cars.push(newCar)
  }
  findCar(index) {
    return this.cars[index]
  }
}
const tesla = new Factory('Tesla')
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
console.log(tesla)
console.log(tesla.findCar(0))
```

Now we can easily create another new factory that produces its own cars

```js
const porche = new Factory('Porche')
porche.generateCar()
porche.generateCar()
console.log(porche)
console.log(porche.findCar(0))
```

## Extra

### Create static properties for a class

Sometimes you want to define properties that pertain to the class as a whole, not the instance. This allows us to limit, somewhat, what the user of class can do.

```javascript
class Person {
  static eyeColors() {
    return ['blue', 'green', 'brown']
  }
  // rest of class definition here...
}
// more code...
const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black')
```
