## Perform CRUD Using Mongoose Models in a Node REPL

1. Start by opening a terminal session and make sure that you are in the project's root folder.

2. Start a Node REPL:

   ```sh
   $ node
   >
   ```

3. Connect to the MongoDB database:

   ```sh
   // If the db connection string is in a .env file, we need to process it just like in server.js
   > require('dotenv').config()
   // Connect to the database
   > require('./config/database')
   {}
   > Connected to MongoDB at localhost:27017
   // Press enter to return to the prompt
   ```

4. Load the Models, for example, `Movie`:

   ```sh
   > const M = require('./models/movie')
   ```

5. Curious what the `Movie` Model looks like?

   ```sh
   > M
   // a big object...
   ```

   **Important:** If you make any changes to a Model, you'll have exit Node and start again.

6. Log all _movie_ docs:

   ```sh
   > M.find({}, (e, movies) => {
   ... console.log(movies)
   ... })
   ```

   The `find` method returns a **Query** object that is first logged, followed by the _movie_ docs. Press enter to return to the prompt.

7. Anything that can be done with a Model in an Express app, can be done in the REPL including CRUD operations, manipulate individual documents, etc.

8. Here's a way to delete all documents from a collection:

   ```sh
   > M.deleteMany({}, (err, result) => console.log(result))
   ...
   > { n: 3, ok: 1, deletedCount: 3 }
   ```

   The _empty query object_ provided as the first argument matches all documents, so all documents were removed.

9. Press `control + C` twice to exit the REPL.
