#!/bin/bash
# USAGE: ./update.sh vX.Y.Z
# where X.Y.Z is the tag of the BS3 repo

if [ ! -d "git-repo" ]; then
  git clone https://github.com/jbrad/bootstrap-ios7.git git-repo
fi

cd "git-repo/"
git checkout -- .
git fetch
# Get new tags from the remote and checkout the latest one
git fetch --tags
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
git checkout $latestTag

npm install
grunt dist
cp -r dist/* ../bootstrap-ios7/
