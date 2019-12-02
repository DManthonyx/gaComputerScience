[Click here to view as a presentation](https://presentations.generalassemb.ly/66dce26e2c3a52f23942ac30885f07cd#/)

---

# Git - Keeping Track of Files

---

## Lesson Objectives

1. Describe what git is and what it does
1. Add an ssh key to your github account
1. Create a repository in github
1. Clone that repository
1. Stage Files
1. Commit Files
1. Push files

---

## Lesson Objectives

1. Pull changes from remote repo
1. Fork a repository
1. Pull changes from original repo
1. Create a branch
1. Push a branch to the repo
1. Merge a branch into another branch

---

## Describe what git is and what it does

- Git is just a tool that allows you to move project specific files from your "local" (or personal) computer to another internet-connected computer which is acting as a central location for your code. This other computer is called a "remote repository."
- All other computers that want to contribute to this specific project, will use the same remote repository (central computer), but send files from their own local computers.

---

## Add an ssh key to your github account

- When you get tired of always entering your github password, you can use the ssh URL (as opposed to the https URL) when cloning a repo
- You'll need to also add what's called an ssh key to github https://help.github.com/articles/generating-an-ssh-key/
- Now you can use the ssh url when cloning instead of https

---

## Create a repository in github

1. Go to https://git.generalassemb.ly
1. On the right click the green button that says "New Repository"
1. Give the repo a name and click Create

---

## Clone that repository

1. Once you've created the repo, you'll be taken to repo page
1. In the "Quick setup" section, copy and paste **the SSH** url
1. Go to a suitable location in the terminal (let's do `~/dev/`) and type `git clone` and paste the https url (e.g.`git clone git@git.generalassemb.ly:mahuntington/asdfasdf.git`)

---

## Stage Files

`cd` into the repo and use `ls -a` to check for a `.git` repo

Now create `specific_file.txt` and make some changes to it.

Once you've finished making changes for the moment, it's time to tell git which files need to have their changes logged

- `git add specific_file.txt` will log all changes to the file specific_file.text
- `git add .` will log the changes to all files in the current working directory
- `git add some_dir/` will log the changes to all files in the some_dir directory
- `git add -A` will add all files in the local repo that have been modified

To see the status of which files are in the process of being committed use `git status`

---

## Commit Files

Log the files, and give the log a description (or "message") so you can easily remember what was done

- `git commit -m "changed the database structure to allow for an email address for each user"`
- check your commits with `git log`

---

## Push files

Push your changes to the remote repository

- `git push origin master`
- origin is the nickname of the remote repo. Master is the name of the branch (covered later), this is usually master when you start out.

---

## Pull changes from remote repo

Pull any changes others made to the repo into your local version of the repo

- `git pull origin master`

---

## Fork a repository

Open source software is popular because the source code for an open source application is available for viewing on the internet. If you want to play around with the code of an open source app on github, you can simply fork the repo and make changes to it there.

1. Find the class repo on github
1. In the upper right, click the `fork` button
1. Choose which user (or organization if you belong to any) should create the duplicated repo
1. Clone, add, commit, push as normal

---

## Pull changes from original repo

Sometimes you want to get changes that have been made to the original repository

1. Add original remote repo with `git remote add upstream git@git.generalassemb.ly:mahuntington/asdfasdf.git`
   - `upstream` is a conventional name, it can be anything, though
   - update the URL to that of the original repo NOT your fork
1. Pull with `git pull upstream master`

---

## Create a branch

- When working on a specific feature, it's generally a good idea to create a "branch"
- This is purely for organizational purposes - In general, the `master` branch is for finished features - If you are working on a feature, it's not complete, but you want to save those changes to the repo (perhaps it's the end of the day), you can use branches to keep your changes off the `master` branch

---

## List and Switch Branches

- To list all branches run `git branch`
- To create a new branch run `git branch newbranch`
- Switch to a branch using `git checkout foo`. From now on, until you change branches again, all commits will be created on that branch

---

## Push a branch to the repo

- `git push origin newbranch` will push the currently active branch to the remote on a branch called "newbranch"
- in general, you should push a local branch to a branch on the remote repo with the same name

---

## Merge a branch into another branch

Once you are finished with branch and want to merge it (usually back into master):

1. switch to the branch that you want to merge the new branch INTO (`git checkout master`)
1. merge the branch using `git merge newbranch`. This will merge the `newbranch` branch into the currently active branch (usually `master`)
