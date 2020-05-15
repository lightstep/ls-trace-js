echo "Will publish to remote"

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
  git commit "packages/dd-trace/lib/version.js" -m "Updating \"version.js\" to version \"$version\""
fi

git push
git push --tags
