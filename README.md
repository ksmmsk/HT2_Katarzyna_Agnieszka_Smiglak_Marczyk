# Dropbox API test
## Testing automation project using Postman

Technologies used:
- Postman
- Newman
The tests are implemented in one collection, with each test case in its own folder to allow for running all the test cases at once or just a selected test case.

To allow for running from command line, those tests are set-up with a temporary Dropbox account I've created just for this purpose. A refresh token is used to generate new access tokens. (Authorising the app to additional Dropbox accounts requires the use of a web browser.)

## Prerequisites
- Node.js and npm installed

## Setup
1. Clone this repository with `git clone git@github.com:ksmmsk/HT2_Katarzyna_Agnieszka_Smiglak_Marczyk.git`
2. Navigate to the main project folder
3. Install dependencies with `npm install`

## Running test suite
1. Open the main project folder in terminal
2. Run the tests:
    - all test cases: `npm run testall`
    - test just upload: `npm run testupload`
    - test just delete: `npm run testdelete`
    - test just getFileMetadata: `npm run testmetadata`
3. A command line report is displayed as the tests are being run. Additionally, a html report is generated. To display it, run:
    - `npm run report`
