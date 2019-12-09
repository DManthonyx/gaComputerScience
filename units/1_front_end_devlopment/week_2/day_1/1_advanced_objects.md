![General Assembly](https://logo.clearbit.com/generalassemb.ly/?size=256)

[View as presentation](https://presentations.generalassemb.ly/38d46b13f00de87e87b0369ead88daaa#/)

# Object-Ception

## Lesson objectives

_After this lesson students will be able to:_

1. Use an array inside an object
1. Iterate over an array that is within an object
1. Use an object within an object
1. Use an object within an object within an object
1. Use an array within an object within an object within an object
1. Use an array of objects
1. Use variables to store a key
1. Loop over an object
1. Combine objects, arrays, and functions

## Use an array inside an object

Let's model an adventurer who has belongings (a list)

```javascript
const adventurer = {
  name: 'Timothy',
  hitpoints: 10,
  belongings: ['sword', 'potion', 'Tums'],
}
```

Access all values in the player.belongings array:

```javascript
console.log(adventurer.belongings)
```

Access a specific item in the belongings array:

```javascript
console.log(adventurer.belongings[0])
```

## Iterate over an array that is within an object

```javascript
for (let i = 0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i])
}
```

## Use an object within an object

Our adventurer now has a companion! Our companion, a **bat**, is an object with its own properties.

Add the `companion` object to the `adventurer` object:

```javascript
const adventurer = {
  name: 'Timothy',
  hitpoints: 10,
  belongings: ['sword', 'potion', 'Tums'],
  companion: {
    name: 'Velma',
    type: 'Bat',
  },
}
```

Access the companion object:

```javascript
console.log(adventurer.companion)
```

> => { name: "Velma", type: "Bat" }

Access the companion's name:

```javascript
console.log(adventurer.companion.name)
```

> => "Velma"

Access the companion's type:

```javascript
console.log(adventurer.companion.type)
```

> => "Bat"

## Use an object within an object within an object

Velma the bat also has a companion, a magical **parasite** called Tim.

Let's add **Tim** to our data:

```javascript
const adventurer = {
	name: Timothy,
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
		companion: {
			name: "Tim",
			type: "Parasite"
		}
	}
}
```

**What would you write to:**

- console.log Tim's **type**

## Use an array within an object within an object within an object

Tim has a **bag of holding** and can carry an infinite number of belongings.

Let's add an array of belongings to Tim:

```javascript
const adventurer = {
  name: 'Timothy',
  hitpoints: 10,
  belongings: ['sword', 'potion', 'Tums'],
  companion: {
    name: 'Velma',
    type: 'Bat',
    companion: {
      name: 'Tim',
      type: 'Parasite',
      belongings: ['SCUBA tank', 'Rogan josh', 'health insurance'],
    },
  },
}
```

**What would your write to:**

- console.log "health insurance"

## Use an array of objects

A common pattern you will start to see everywhere (especially in Unit 2 and onwards) is an **array of objects**.

An array of objects can look like this:

```javascript
const movies = [
  { title: 'Tokyo Story' },
  { title: 'Paul Blart: Mall Cop' },
  { title: "L'Avventura" },
]
```

These objects have no names, they are just anonymous objects packed into an array.

You could reference them with indexes as usual:

```javascript
console.log(movies[0])
```

You could reference the properties by first asking for the index, then the property:

```javascript
console.log(movies[0].title)
```

You could loop over the array and just print all of the titles:

```javascript
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title)
}
```

## Use variables to store a key

```javascript
const monster = {
  name: 'Slimer',
  age: 6,
}

const someVar = 'name'

console.log(monster[someVar]) // same as monster['name'];
```

> => 'Slimer'

## Loop over an object

There are two way to loop over objects. You can use either way. Both ways involve looping over the object's **keys**.

Let's say we have a movie object:

```javascript
const movie = {
  title: "L'Avventura",
  director: 'Michelangelo Antonioni',
  year: 1960,
}
```

### `for ... in` loop

Print each key:

```javascript
for (let key in movie) {
  console.log(key)
}
```

> =>
>
> title
>
> director
>
> year

Print each value:

To do this, use the key as a **variable** within the square brackets.

```javascript
for (let key in movie) {
  console.log(movie[key])
}
```

> =>
>
> L'Avventura
>
> Michelangelo Antonioni
>
> 1960

### `Object.keys()`

Object.keys() will return an **array of keys**

```javascript
console.log(Object.keys(movie))
```

> => [ 'title', 'director', 'year' ]

To print the values, use the key as a **variable** within square brackets.

```javascript
const keys = Object.keys(movie)

for (let i = 0; i < keys.length; i++) {
  console.log(movie[keys[i]])
}
```

## Combine objects, arrays, and functions

You can create a property for an object that is an array

```javascript
const foo = {
  someArray: [1, 2, 3],
}
foo.someArray[0] //1
```

You can create a property for an object that is an object

```javascript
const foo = {
  someObject: {
    someProperty: 'oh hai!',
  },
}
foo.someObject.someProperty //oh hai!
```

You can create a property for an object that is a function (method)

```javascript
const foo = {
  someMethod: () => {
    console.log('oh hai')
  },
}

foo.someMethod() //logs 'oh hai!'
```

You can store an object in an array

```javascript
const foo = [{ someProperty: 'weee' }, 2, 3]

console.log(foo[0].someProperty)
```

You can store an array in an array

```javascript
const foo = [
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2'],
]

foo[1][2] //1,2
```

You can store a function in an array

```javascript
const foo = [
  1,
  'hi',
  () => {
    console.log('fun')
  },
]

foo[2]()
```
