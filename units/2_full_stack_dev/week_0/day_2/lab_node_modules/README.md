## Homework: Modules

- your task is to make a module  (`Car.js`) that defines a car class – with both properties and methods (functions) – and exports it as a module.

In the `Car.js` file:

Users should be able to define the following properties of a new car:
- color
- convertible (boolean)

Cars should automatically come with the following property:
- speed (0, at first)

Functions specs:
- include accelerate and decelerate
  - these should take one argument, the speed, and add or substract it the from the current speed

Node modules:

You will notice a package.json file listing specific packages (a.k.a node modules) required for testing this assignment. Node modules will be vital to this unit and future javascript projects. In this case, our modules add automated testing functionality to our project.

Run <code>npm install</code> to install packages listed in package.json. This will create a node_modules folder that your project will draw from.

To test your Car class, run <code>npm test</code> to test the features. DO NOT ALTER THE TEST FILE. Continue coding in the Car.js file until all tests pass.
