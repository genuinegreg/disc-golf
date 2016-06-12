#!/bin/bash


git checkout gh-pages
git rebase master

jspm bundle main.js build.js
git add -f jspm_packages/system.js build.js build.js.map

git commit -m "gh-pages"
git push origin gh-pages

git checkout master