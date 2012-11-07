# Buster source file limits experiment

There seems to be a limit to how many source files BusterJS can load for running tests in browsers.

That limit seems to be ~425.

For running tests in node, up to 10,000 files have been loaded succesfully (yes, it takes a while).

## Installing dependencies

`npm install`

Installs dependencies for the script that generates empty test files

## Create test files

`node create-empty-test-files.js`

This creates **425** empty source files

## Run tests

Run tests in browser(s) as per usual, it should be fine.

## Add one more empty file

Open `create-empty-test-files.js` and update the file limit to 426, save and run

`node create-empty-test-files.js`

This creates **426** empty source files

Run tests in browser(s) again, observe that the test runner just hangs.