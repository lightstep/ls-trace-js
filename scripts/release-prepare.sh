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
currentBranch=`git symbolic-ref --short -q HEAD`
git push --set-upstream origin $currentBranch
git push origin --follow-tags
