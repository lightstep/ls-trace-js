echo "Preparing Release"

echo  "Checking npm version ..."
checkNpm=`node "./scripts/check-npm.js"`
exitCode="$?"

if [ "$exitCode" = "0" ]; then
  echo "Current version to be released \"$checkNpm\""
else
  echo "ERROR"
  echo "$checkNpm"
  echo "Please fix the error and try again"
  exit
fi

echo "Checking version.js"
version=`node "./scripts/check-version.js"`
exitCode="$?"
if [ "$exitCode" = "2" ]; then
  echo "Updating \"version.js\" to version \"$version\""
  git commit "packages/dd-trace/lib/version.js" --amend --no-edit
fi

upstreamExists=`git remote -v | grep upstream_tmp_release | tail -1`
if [ "$upstreamExists" != "" ]; then
  git remote remove upstream_tmp_release
fi
git remote add upstream_tmp_release git@github.com:lightstep/ls-trace-js.git

currentBranch=`git symbolic-ref --short -q HEAD`
git push --set-upstream upstream_tmp_release $currentBranch
git push upstream_tmp_release "v$version"

git remote remove upstream_tmp_release
