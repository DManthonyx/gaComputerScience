<img src="https://i.imgur.com/pF2sUV5.jpg">

# SEI Installfest 2

We'll be installing the following tools.

- Node.js
- nodemon
- express-generator
- Docker
- PostgreSQL
- MongoDB

## Node.js

Node is a JavaScript engine for the backend. We use it to power our web servers and connect to our databases.

```
brew install node
```

Verify the installation afterwards by running:

```
node -v
npm -v
```

The above commands should display versions without any errors. To verify that all the required permissions are set correctly, try to install a package such as the useful _nodemon_ globally:

```
npm install -g nodemon
```

---

### Express Generator

- Use the application generator tool, express-generator, to quickly create an application skeleton.

```
$ npm i -g express-generator
$ express -h
```

**For example**, the following creates   an Express app named myapp. The app will be created in a folder named myapp in the current working directory and the view engine will be set to Pug:

```
$ express --view=pug myapp
```

---

### PostgreSQL

Install the **PostgreSQL** database management system (DBMS) using Homebrew with this command:

```
brew install postgresql
```

After Postgres is installed run this command:

```
brew services start postgresql
```

Followed by this command to test the install by creating a new database named the same as the current system user:

```
createdb
```

```
source ~/.bashrc
```

```
brew services list
```

```
psql
```

```
brew services stop postgresql
```

---

### Install **MongoDB**

- https://www.mongodb.com/download-center/community

---

[Using Homebrew](https://github.com/mongodb/homebrew-brew)

```
$ brew update
$ brew tap mongodb/brew

```

### Installing Formulae

Once the tap has been added locally, you can install individual software packages with:

```
$ brew install <formula>

```

For example:

Install the latest available production release of MongoDB Community Server (including all command line tools). This will currently install MongoDB 4.2.x:

```

$ brew install mongodb-community

```

Now create the directory where your MongoDB data will be stored:

```

$ sudo mkdir -p /data/db

```

or

```

$ sudo mkdir -p /System/Volumes/Data/data/db

```

Grant permission to your data directory:

```

$ sudo chown -R <your username here> /System/Volumes/Data/data/db

```

or

```

$ sudo chown -R $(whoami) /data/db

```

### Testing the MongoDB server

Run the Mongo daemon, in one of your terminal windows run

```

$ mongod
$ mongod --dbpath /System/Volumes/Data/data/db

```

This should start the Mongo server.
With the Mongo daemon running in one terminal, run the Mongo shell, an application to access data in MongoDB.
Type the following in another terminal window.

```

$ mongo

```

To exit the Mongo shell run

```

$ quit()

```

To stop the Mongo daemon hit ctrl-c

You start the Mongo database server with the following command:

---

If you prefer not to have to start/stop MongoDB while working with it in class, you can run this command to ensure the MongoDB engine is running at all times:

---

### Default Paths for the mongodb-community Formula

In addition to installing the MongoDB server and tool binaries, the mongodb-community formula creates:

a configuration file: /usr/local/etc/mongod.conf
a log directory path: /usr/local/var/log/mongodb
a data directory path: /usr/local/var/mongodb

```

$ brew services start mongodb-community

```

and to stop

```

\$ brew services stop mongodb-community

```

> Note that having the MongoDB process continuously running does consume system resources, so you may be better off manually starting/stopping MongoDB if you have an older (slower) computer.

---

### Global .gitignore

- Create a global .gitignore file, which is a list of rules for ignoring files in every Git repository on your computer. For example, you might create the file at ~/.gitignore_global and add some rules to it.
- https://gist.github.com/gregsantos/b80ff65143801d8c5fc17ac3f2814a8d
- Run the following command in your terminal:

* \$ git config --global core.excludes file ~/.gitignore_global

```

```
