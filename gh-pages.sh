#!/bin/bash


git checkout gh-pages
git reset --hard master

jspm bundle main.js build.js
git add -f jspm_packages/system.js build.js build.js.map

git commit -m "gh-pages"
git push origin gh-pages -f

git checkout master