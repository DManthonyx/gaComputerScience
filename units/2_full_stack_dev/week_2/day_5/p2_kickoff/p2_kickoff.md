## P2 Kickoff

- Create an Express app using Express Generator
- cd into app and npm install
- npm install mongoose, passport, passport-google-oauth20, cookie-parser, dotenv, express-session
- git init, add, commit, and push to remote
- create .env file with the following keys:
  - DATABASE_URL=mongodb://localhost/\$YOUR_DB_NAME
  - GOOGLE_CLIENT_ID=
  - GOOGLE_SECRET=
  - GOOGLE_CALLBACK=http://localhost:3000/oauth2callback

## User Model

- Create a schema/model named `User` with the properties you want - **name**: `String` - **email**: `String` - **googleId**: `String`
- Test the Model by creating a User or two in a Node REPL. Instructions in todays repo dir

---

### server.js

```
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')

// load the env consts
require('dotenv').config()

require('./config/passport')

// create the Express app
const app = express()

// connect to the MongoDB with mongoose
require('./config/database')
```

### Add passport middleware

```
app.use(cookieParser())
app.use(
  session({
    secret: 'SEI-DT-69-Rocks!',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())
```

### Add auth routes to **routes/index.js**

```
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/',
  })
)
// OAuth logout route
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
```

## add config

- Create a `config/database.js` module and connect to **process.env.DATABASE_URL**
- Create a passport.js module and add Google Strategy
- **_see today's repo for example code_**

### Login Link for View

```
<% if (user) { %>
<a href="/logout">Log Out</a>
<% } else { %>
<a href="/auth/google">Login with Google</a>
<% } %>
```

---

## Step by Step

As we build out our CRUD functionality, here is the process we will repeat:

1. Determine the verb + URI for the route. Use [RESTful conventions](https://git.generalassemb.ly/SEI/sei-dt-69/blob/master/resources/REST.md) whenever possible.
2. Add the UI (link and/or forms) to the view that will trigger the request.
3. Define the route in the appropriate router module for the request, mapping it to the <controller>.<method>.
4. Add the controller action/method and be sure to export it.
5. In the controller, perform necessary CRUD and either render (passing it the data) or redirect.
