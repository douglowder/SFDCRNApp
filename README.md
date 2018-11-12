**SFDCRNApp**

Example app for using React Native with Salesforce Mobile SDK.

Currently this app authenticates to a Salesforce org, then executes the SOQL query

`SELECT Id, Name FROM User LIMIT 10`

and displays the results in a React Native view.  It is generally the same as what gets generated by the `forcereact` CLI tool found at https://github.com/forcedotcom/SalesforceMobileSDK-Package , but updated for React Native 0.56.

Installation for iOS:

- Clone this repo
- Change to the repo directory and execute `./installios.js`.  This does the following:
  - Installs the Salesforce Mobile SDK dependencies for iOS
  - Installs the npm dependencies
  - Runs Cocoapods to generate the Xcode workspace
  - Builds the React Native JS bundle
- Open `ios/SFDCRNApp.xcworkspace` in Xcode, and build and run the project

Installation for Android:

- Clone this repo
- Change to the repo directory and execute `./installandroid.js`.  This does the following:
  - Installs the npm dependencies
  - Builds the React Native JS bundle
  - Installs the Salesforce Mobile SDK dependencies for Android
- Build the Android app either by
  - opening the `android` directory in Android studio
  - build on the command line by doing `cd android; ./gradlew assembleDebug`
  

MIT License
  
Copyright (c) 2018 Salesforce

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
