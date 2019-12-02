[Click here to view as a presentation](https://presentations.generalassemb.ly/9786a9d69cc57f490dd9642f3bc58c28#/)

---

<img src="https://media.giphy.com/media/3oEjHQn7PBRvy9A5mE/giphy.gif" width="900">

# Intro to the<br>Dev Environment

---

## Learning Objectives

<br>

<p>Students will be able to:</p>

- Be more productive by using the keyboard vs. the mouse.

- Use the _Terminal_ Command Line Interface (CLI) to navigate and manipulate the filesystem.

- Upload screenshots and images to _imgur.com_.

---

## Being More Productive by using the Keyboard vs. the Mouse

---

### Launching Apps with Spotlight

<br>

- Developers avoid using the mouse whenever possible.

- Developers are more productive when their hands are on the keyboard.

- Open applications using _Spotlight_ instead of the mouse by: 1. Pressing `cmd+space` to open _Spotlight_ 2. Start typing the name of the app until the app is highlighted 3. Press `enter` to open the app!

---

### Switching Between Applications

<br>

- Quickly switch between running applications by pressing `cmd+tab`.

- If a minimized applications does not display after tabbing to it with `cmd+tab`: 1. Continue to hold down `cmd` and release `tab` 2. Press `option` then release `cmd`

---

### Switching Between Instances of an Application

<br>

- You can switch between multiple windows of the same application using **cmd+\`** (that's a back-tick character, which is above the `tab` key).

- Note that it's best to minimize how many windows/applications you have open when developing to make switching between applications quicker and minimize distractions to the job at hand.

---

### Using the _Terminal_<br>Command Line Interface

---

### What is _Terminal_?

<br>

- _Terminal_ is the developers' choice for entering commands and navigating the filesystem.

- _Terminal_ is an app known as a _shell_. The default shell in Mac OS X is _Bash_. You will find the terms _terminal_ and _bash_ often used interchangeably.

- Go ahead and open _Terminal_ (remember - use Spotlight!).

---

### Command Line Basics

<br>

<p>Here are the basic command tasks we'll try out:</p>

- Change directories (folders)
- List a directory's contents
- Create a directory
- Create a file
- Move files and directories
- Copy files and directories
- Rename files and directories
- Delete files & directories
- Command history & clearing the window

---

### Describe the state of the current directory

The Command Line understands commands written in the `bash scripting language`. The commands are abbreviations of English words, or acronyms.

- `pwd` - will print the current working directory. It shows you a `path`. This `path` shows you where you are currently located in the filesystem. It's like sending up a flare or homing beacon, where you can see how far you have 'traveled' from the root directory.

![](https://i.imgur.com/4aaT88x.png)

---

- `ls` - Lists the contents of the current directory. You can see
  _ the immediate *child* directories (the directories inside this directory)
  _ the files in this directory

![](https://i.imgur.com/H2RTUny.png)

---

- Bash commands can take `flags` denoted by a dash `-`.
- `ls -a` - `ls` does not display hidden files by default, adding the `-a` option will show them. Hidden files and directories begin with a period, for example, `.git`.
- `ls -l` - list content and give meta information about each item

---

#### Change Directories

Directories (folders) can have directories within them, and there can be directories inside _those_ directories, ad infinitum. This creates a tree structure where directories can have many children with many different branches.

- We use the `cd` command to change directories.

We can navigate to other directories _relative_ to the current working directory.

- `cd some_directory` - navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
- `cd ..` - navigates into the parent of the current directory 
- `..` is shorthand for parent
- `cd` will take you back home

---

#### Common shortcut characters used when navigating the filesystem

- `~` The logged in user's _home_ directory
- `/` The _root_ (top-level) directory on the harddrive
- `.` The current directory
- `..` The parent directory of the current directory

---

#### List a Directory's Contents

<br/>

- Use the `ls` command to display a concise list.

- `ls` does not display hidden files by default, adding the `-a` option will show them.

---

#### Create a Directory

<br/>

- Use the `mkdir` command to create directories.

- Let's create a `drawers` directory inside of the _home_ directory:

      	$ mkdir ~/drawers

* Note that you don't have to specify the _full path_ if we are already in the _home_ directory.

---

#### Using Tab Auto-Completion

<br>

- Change to the _home_ directory.

- Now let's change to our newly created `drawers` directory, however, only type `cd d`,<br/>then press `tab` which will auto-complete directory name(s).

- You can cycle between matching directory names by continuing to press `tab`.

---

#### Creating Files

<br/>

- We use the `touch` command to create empty files.

- Let's move to the `drawers` directory and create a directory named `socks`. Here is how we can create the directory **and** change to it using a single command:
  `sh $ mkdir socks && cd socks`

- Now let's create a `dress.socks` file:

      	$ touch dress.socks

---

#### Practice Creating Directories and Files

<br>

1. Create this directory: `~/drawers/pjs`.

2. Create two files in the new `pjs` folder named `warm.pjs` and `favorite.socks`.

---

#### Moving Files

<br/>

- Okay, so we have a messy `drawers/pjs`, let's move our `favorite.socks` file out of the `pjs` folder and into the `drawers/socks` folder where it belongs!

- Here's how we can do the move regardless of which directory we're currently in by using absolute paths:

      	$ mv ~/drawers/pjs/favorite.socks ~/drawers/socks/

      	Be sure to use tab-completion!

> Note that you have the option to use _absolute_ and/or _relative_ paths.

---

#### Moving Directories

<br/>

- Moving directories is just as easy using the same `mv` command.

- Try it out: 1. Create a `~/shorts` directory 2. Move the newly created `shorts` directory into the `drawers` directory

---

#### Renaming Files

<br/>

- Guess what - there's no dedicated bash command to rename files and directories!

- Don't panic! The `mv` command is very flexible!

- Here's how we can rename the `warm.pjs` file to `summer.pjs` from anywhere:
  `sh $ mv ~/drawers/pjs/warm.pjs ~/drawers/pjs/summer.pjs`
- Of course, you can actually move and rename simultaneously!

---

#### Deleting Files

<br/>

- We use the `rm` command to delete both files and directories.

- Let's first use it to delete the `dress.socks` file. Here's one way:
  `sh $ cd ~/drawers/socks && rm dress.socks`

- Using the `*` wildcard character, it's possible to delete and move multiple files. For example, typing `*.socks` would match all files with an extension of `.socks`...

---

#### Deleting Directories

<br/>

- Deleting directories is almost the same as deleting files except you must use the `-rf` option, which runs the `rm` command "recursively" and "forces" the deletion of directories.

- To delete the `pjs` folder we could use this command:


      	$ rm -rf ~/drawers/pjs

---

#### Moving Multiple Files

<br/>

- To demonstrate moving multiple files, re-create the `dress.socks` file we just deleted from the `socks` directory.

- Now let's move all of the `.socks` files out of the `socks` folder into our _home_ folder. The following command assumes we're inside the `socks` folder:

      	$ mv *.socks ~

- Now, without changing directories, return the socks files back to where they belong.

---

#### Copying Files & Directories

<br/>

- Use the `cp` command to copy files and directories.

- Here's how we can copy all **.js** files:

      	$ cp *.js ~/dest-folder

- And entire directories by adding the `-R` option:

      	$ cp -R ./sample-code ~/dest-folder

---

#### Command History & Clearing the Window

<br/>

- Pressing the up and down arrows in Terminal will cycle through previously entered commands. This can be a huge time saver!

- If you'd like to clear the Terminal window, simply press `cmd+k`.

---

## Uploading Screenshots and Images to _imgur.com_

---

### Screenshots

<br/>

- The following keyboard shortcuts can be used to take screenshots of your screen:
- Whole screen: `shift-cmd-3`
- Part of your screen: `shift-cmd-4`
- A certain window: `shift-cmd-4`, then `spacebar` to toggle window mode

---

### Why Upload Images?

<br/>

- Often you will need to share images with others or use them in your applications, notes, readme files, etc.

- Unfortunately, if an image exists only on your computer, you lose the ability to use it anywhere but on your computer.

- The solution is to upload images to a cloud service...

---

### Imgur

<br/>

- One of the most popular image hosting services on the Internet is [Imgur](http://imgur.com/).

- Go there now and open a free account.

- You can upload images using Imgur's web interface, but there's a better way...

---

### Upload from the CLI using [imgur-upload-cli](https://github.com/arnellebalane/imgur-upload-cli)

- \$ npm install -g imgur-upload-cli
- \$ imgur-upload path/to//image_file.jpg \*
- returns -> imgur url : https://i.imgur.com/AOjwFfP.jpg

---

## Going Forward

<br/>

- We have only scratched the surface of the _Terminal_. Rest assured that throughout your time in SEI, we will help you to get to know these tools much better!
- Next we'll take a look a programmer's most used tool. The text editor.
