# GIT commands
## Srart a new reposotory (repo)
```bash
git init
```
## Add a file to the tracking system
```bash
git add file_path
```
***Example: git add src/App.jsx***

## Add all files to the tracking system
```bash
git add .
```
## Save current changes as a commit
```bash
git commit -m "YOUR MESSAGE"
```
## Check the repo status
```bash
git status
```
## Check all commits
```bash
git log
```
***For long log***
- To see next logs (space)
- To exit the log (q)

## To go to previous commit
```bash
git checkout COMMIT_ID
```
## to undo all changes made to a file, and return to last commit
```bash
git restore file_path
```
## to undo all changes made to a repo, and return to last commit
```bash
git restore .
```
