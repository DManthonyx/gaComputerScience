# this

### Definition

**_this_** is the current execution context of a function.

---

### The Javascript language has 4 function invocation types:

- **function invocation:** `alert('Hello World!')`
- **method invocation:** `console.log('Hello World!')`
- **constructor invocation:** `new RegExp('\\d')`
- **indirect invocation:** `alert.call(undefined, 'Hello World!')`

### What is _this_ in each invocation

- this is the global object in a function invocation
- this is undefined in a function invocation in strict mode
- this is the object that owns the method in a method invocation
- this is the newly created object in a constructor invocation
- this is the first argument of .call() or .apply() in an indirect invocation
- this is the first argument of .bind() when invoking a bound function
- this is the enclosing context where the arrow function is defined

---

Because the function invocation has the biggest import on **_this_**, from now on do not ask yourself: Where is this taken from?

Ask yourself:
**How is the function invoked?**

For an arrow function ask yourself:
**What is this where the arrow function is defined?**

### Further Study

- https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
- https://www.w3schools.com/js/js_this.asp
- https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/
