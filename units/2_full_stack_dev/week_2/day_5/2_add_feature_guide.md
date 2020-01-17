<img src="https://i.imgur.com/Zi1FCnV.png">

# Guide to Add a Feature to a Web App

### Intro

This guide is generic in that it does pertain to any particular web framework, e.g., Express.

When the time comes to implement a user story (feature) in a typical web application, following the steps below usually is a good approach to take in most cases...

#### Step 1 - Identify the "Proper" Route

If there's a RESTful/Resourceful route that's applicable - use it!

Use [this guide](https://gist.github.com/jim-clark/17908763db7bd3c403e6) to identify the CRUD operation or purpose similar to the feature you are implementing to find the proper route.

Of course, you will substitute the data resource you are CRUDing.  For example:  `GET /students` would be the proper route if I wanted to see a list of the _students_ resource.

Then make note of the **HTTP method** and the **URI/Path/Endpoint** of the route.

#### Step 2 - Create the UI

Now that the route has been identified, you need to create the UI that is going to send an HTTP request that matches that route.

In a traditional web app (which does not use AJAX), there are only two ways to send a request to the server:

- Hyperlinks (`<a>` tags), and
- Forms (`<form>` tags)

##### EXAMPLES

**See a page listing all Students:**

```html
<a href="/students">Student List</a>
```

**See a page with the details of a Student with the id of 1234:**

```html
<a href="/students/1234">Details</a>
```

**See a page with a form to enter a new Student:**

```html
<a href="/students/new">Add a Student</a>
```

**Create a Student when the form is submitted:**

```html
<form action="/students" method="POST">
```

**Delete the Student with an id of 1234:**

```html
<form action="/students/1234?_method=DELETE" method="POST">
```

> Note: The above example is specific to Express applications where the query string informs the `method-override` middleware on the server to change the POST request sent by the form into a DELETE request before the router middleware receives the request.

**See a page with a form to edit the Student with an id of 1234:**

```html
<a href="/students/1234/edit">Edit Student</a>
```

**Update the Student with an id of 1234 when the form is submitted:**


```html
<form action="/students/1234?_method=PUT" method="POST">
```

#### Step 3 - Define the Route

Okay, so the UI is in place to send the HTTP request to the server when the user clicks a link or submits a form.

Now you have to ensure that there's a route defined on the server that matches that route.

When the server receives an HTTP request matching a route that's been defined, the web framework is going know what code to run because you define routes for the purpose of mapping HTTP requests to controller actions/methods.

##### EXAMPLES

Using the Express framework as an example, let's assume you have a `routes/students.js` module exporting the router object and required in **server.js** as follows:

```js
var studentsRouter = require('./routes/students');
```

and then mounted as follows:

```js
app.use('/students', studentsRouter);
```

> Note: The router is being mounted such that all paths must begin with `/students`.  In the case of a nested (child) resource, e.g., `grades` (`Student ---< Grade`), you would want to mount `gradesRouter` as `app.use('/', gradesRouter);` so allow for the flexibility of being able to define some routes that begin with `/students`, e.g., `/students/:id/grades` and others that begin with `/grades` as shown in the aforementioned routing guide.

Within the router module you can now define routes such as:

```js
// GET /students (index - show a list of students)
router.get('/', studentsCtrl.index);

// GET /students/new (show a form to enter a new student's data)
// Note that the 'new' route must be defined before the 'show' route
router.get('/new', studentsCtrl.new);

// POST /students (create a student using the submitted form data)
router.post('/', studentsCtrl.create);

// GET /students/1234 (show the details for student 1234)
router.get('/:id', studentsCtrl.show);

// GET /students/1234/edit (show a form to edit student 1234)
router.get('/:id/edit', studentsCtrl.edit);

// PUT /students/1234 (update student 1234 using the submitted form data)
router.put('/:id', studentsCtrl.update);

// DELETE /students/1234 (delete student 1234)
router.delete('/:id', studentsCtrl.delete);
```

#### Step 4 - Code the Controller Action

So, the route definition is going to result in a controller action/method being run!

Controller actions are responsible for performing CRUD and providing data to views if necessary.

For example, in an Express/Mongoose app, the `index` action might look like:

```js
function index(req, res) {
    Student.find({}, function(err, students) {
        res.render('students/index', {students});
    });
}
```

However, as shown above, the last thing a controller action will do is respond to the client by...

#### Step 5 - Respond to the Client's HTTP Request

In the case of a CRUD **read** operation, the controller action will pass the data retrieved from the database to a view to be rendered and returned to the client. **Code that view if need be.**

In case of a CRUD **create, update or delete**; the action likely be responding to the client by sending a redirect to an appropriate URL.