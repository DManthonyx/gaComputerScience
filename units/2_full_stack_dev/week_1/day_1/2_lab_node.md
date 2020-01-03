### 💪 Practice - Modules #1

<p style="text-align:left">Create two separate modules:</p>

<p style="text-align:left">A module named "random" that has a function <strong>assigned</strong> to the <em>module.exports</em> and returns a random number, as an integer, between two numbers provided, inclusive, as arguments; so that we could use it in our program like this:</p>

```
const random = require('./utilities/random')
for (let i = 0; i < 10; i++) {
  console.log(random(100, 200))
}
```

---

### 💪 Practice - Modules #2

<br>

<p style="text-align:left">A module named "circle" that exports two functions:</p>

- `area`: Computes the area of a circle (radius squared X Pi), with the radius provided as an argument.
- `circumference`: Computes the circumference of a circle (radius X 2 X Pi), with the radius provided as an argument.
- Hint: This is JS, so `Math.PI` is available.

```
const circle = require('./utilities/circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23...
```
