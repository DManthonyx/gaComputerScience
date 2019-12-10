![General Assembly](https://logo.clearbit.com/generalassemb.ly/?size=100)

# Create a callback

Let's examine a variable that is a function

```javascript
const henchman = () => {
  console.log("I'm the henchman")
}
console.log(henchman)
```

We can pass a function into another function

```javascript
const henchman = () => {
  console.log("I'm the henchman")
}
const mobboss = employee => {
  console.log(employee)
}
mobboss(henchman)
```

Once we've done this, we can execute the function that is passed in as a parameter (called a callback)

```javascript
const henchman = () => {
  console.log("I'm the henchman")
}
const mobboss = employee => {
  console.log("I'm the boss")
  employee()
}
mobboss(henchman)
```

This is good because it allows us to perform some functionality and then do something unique once that's complete:

```javascript
const henchman = () => {
  console.log("I'm the henchman")
}
const henchman2 = () => {
  console.log("I'm another henchman")
}
const mobboss = employee => {
  console.log("I'm the boss")
  employee()
}
mobboss(henchman)
mobboss(henchman2)
```

If we want, we don't even need to assign the functions to variables

```javascript
const mobboss = employee => {
  console.log("I'm the boss")
  employee()
}
mobboss(() => {
  console.log("I'm the henchman")
})
mobboss(() => {
  console.log("I'm another henchman")
})
```

This last form is very common. For instance:

```javascript
setTimeout(() => {
  console.log('hi')
}, 2000)
```

---

# Array Methods with Callbacks

## Lesson Objectives

1. Define and understand the various different callback methods that can be used on an array.
2. Understand what each method does and when we might want to use it.

## Create a ForEach function

Let's begin with a basic for loop:

```javascript
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road']
for (let i = 0; i < iceCreams.length; i++) {
  console.log(iceCreams[i])
}
```

This whole thing with `i` and `iceCreams[i]` is kind of obnoxious. Wouldn't it be nice if we could just deal with the element in the array, instead of indexes? Let's create a function that takes two parameters: an array, and a function that we want to be called on each element in the array:

```javascript
//forEach definition
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

//invoke forEach
forEach(
  ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'],
  currentArrayElement => {
    console.log(currentArrayElement + ' ice cream')
  }
)
```

Great, but writing the definition of `forEach` is a pain. Fortunately, JavaScript has something like this already built in:

```javascript
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road']
iceCreams.forEach(currentElement => {
  console.log(currentElement)
})
```

There are lots of other handy functions like `forEach`. They're called Array Methods.

## What is an Array Method with a Callback?

You'll notice that even though `iceCreams` is an array, it functions like an object as well. Consequently, you can add methods to them, just like normal objects (don't forget, `array.length` is a property of the array).

JavaScript has lots of pre-defined array methods available for us. Each array method accepts a callback function which is executed on each of the elements in the array and may or may not do something with the results of that function.

In the previous example, `forEach` simply calls the callback function, passing in the current element as a parameter.

Lets take a look at another array method called `map`. In the previous example, `forEach` iterated over each of its elements and ran the given callback on each of them. What if we wanted to modify each element? How would we write that?

```javascript
//map definition
const map = (array, callback) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    const newElement = callback(array[i])
    newArray.push(newElement)
  }
  return newArray
}

const resultArray = map(
  ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'],
  currentArrayElement => {
    return currentArrayElement + ' ice cream'
  }
)

console.log(resultArray)
```

Again, the implementation of this function is tricky. Lucky for us we have the `.map` method.

```javascript
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road']

const updatedIceCreams = iceCreams.map(flavor => {
  return flavor + ' Ice Cream'
})

console.log(updatedIceCreams)
```

`map` calls a provided callback function once for each element in an array, in order, and constructs a new array from the return values.

**Food for thought: Does the `map` method mutate the original array?**

### Lets try that again!

Use the `map` method with the following array to multiply each item by 2 and log the new array.

```javascript
const orinalArray = [2, 4, 6, 8, 10]

const newNumArray = orinalArray.map(num => {
  return num * 2
})

console.log(newNumArray)
```

What was the result?

```javascript
;[4, 8, 12, 16, 20]
```

## On your own

Research each of the following array methods:

1. Every
1. Filter
1. Find
1. Find Index
1. Reduce
1. Some
1. Sort _(research how to use sort with a callback)_

## Hungry for more

Further Explanations (https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319)
