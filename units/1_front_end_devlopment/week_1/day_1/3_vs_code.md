## Using _VS Code_ to<br>Open and Edit Files

### Learning Objectives

<br>

<p>Students will be able to:</p>

- Get acquainted with common developer tools, Chrome Developer Tools and VSCode text editor

---

### What is _VS Code_?

<br/>

- _VS Code_ is a popular open-source text-editor maintained by Microsoft.

- It's very customizable and capable.

- VS Code's functionality can be extended using _extensions_, however, most useful features are built-in.

- To try it out, let's use VS Code to open and edit a file...

---

### Add _VS Code_ to <code>\$PATH</code>

- We want to be able to type in `code .` in Terminal and have VS Code open the current directory for editing.

- First, open VS Code's **Command Palette** by pressing `⇧⌘P`.

- Next, type "shell command" and select the `Shell Command: Install 'code' command in PATH` command.

- Restart Terminal for the new \$PATH to take effect.

> For the above to work, VS Code must be installed in the **Applications** folder

---

### Edit a File in VS Code

<br/>

- To edit a specific file in VS Code, we can simply type the file after `code`.

- Let's add an _alias_ (shortcut) command that will change to your class repo directory by simply typing `repo`. We can do this by editing the hidden `.bash_profile` file.

      	$ code ~/.bash_profile

---

### Edit a File in VS Code (cont.)

<br/>

- Now add this line (preferably near other aliases)

      	alias repo='cd ~/code/<path to repo folder>'

- Pressing `cmd-s` will save the file.

- Close Terminal then re-open it and type `repo` to test it out.

---
### VSCode Shortcuts
* CMD Shift P
* CMD MUY 
* carrot Terminal
* CMD K, V