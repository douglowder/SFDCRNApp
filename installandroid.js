#!/usr/bin/env node

const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');

console.log('Installing npm dependencies');
execSync('npm install', { stdio: [0, 1, 2] });
const rimraf = require('rimraf');
const packageJson = require('./package.json');

console.log('Build JS bundle');
execSync('npm run bundle_android_dev', { stdio: [0, 1, 2] });

console.log('Installing sdk dependencies');
const sdkDependency = 'SalesforceMobileSDK-Android';
const repoUrlWithBranch = packageJson.sdkDependencies[sdkDependency];
const parts = repoUrlWithBranch.split('#'),
  repoUrl = parts[0],
  branch = parts.length > 1 ? parts[1] : 'master';
const targetDir = path.join('mobile_sdk', sdkDependency);
if (fs.existsSync(targetDir)) {
  console.log(
    `${targetDir
      } already exists - if you want to refresh it, please remove it and re-run install.js`
  );
} else {
  execSync(
    `git clone --branch ${
      branch
      } --single-branch --depth 1 ${
      repoUrl
      } ${
      targetDir}`,
    { stdio: [0, 1, 2] }
  );
  rimraf.sync(path.join('mobile_sdk', 'salesforcemobilesdk-android', 'hybrid'));
  rimraf.sync(
    path.join('mobile_sdk', 'salesforcemobilesdk-android', 'libs', 'test')
  );
}
