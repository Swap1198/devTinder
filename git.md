To push code to the git followed following step
Git: Refered as local git repo
GitHub: Refered as remote/cloud git repo

First push code to local git repo
>> To push code to local repo, first install git in system.. git --version ( to know git successfully install or not).
>> git init --  after installation please initialize the git
>> .gitignore -- file contain name of folder/file which git should ignore while pushing.
>> git add . ( this add all file to commit) for specific file use git add <file name>
>> git commit -m "description" -- this commit the code on local git repo.

Upload code on remote git repo
>> If any origin is present, please remore it... origin refer to the repo where you have to push your  code. --  git remote remove origin
>> add git repo where you  have to push you code... login github---create repo---copy HTTPS url
git remote add origin https://github.com/Swap1198/devTinder.  --- git remote add origin <https url>
>> To check whether we on correct git repo --- git remote -v --- will get repo name where code will get deploy.
>> To push code to repo -- git push -u origin main -- Do authentication afterward.
Successfully push code on git.