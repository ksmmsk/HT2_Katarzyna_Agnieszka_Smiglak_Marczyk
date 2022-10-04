# Dropbox API test
## Testing automation project using Postman

Technologies used:
- Postman
- Newman
The tests are implemented in one collection, with each test case in its own folder to allow for running all the test cases at once or just a selected test case.
To allow for running from command line without end user's having to authenticate their own Dropbox account, those tests are set-up with a temporary Dropbox account I've created just for this purpose.

## Prerequisites
- Node.js and npm installed

## Setup
1. Clone this repository
2. Navigate to the main project folder
3. Install dependencies with `npm install`

## Running test suite
1. Open the main project folder in terminal
2. Run the tests:
- `npm run test` for all the tests
- to run one test case:
    - just upload: `npm run testupload`
    - just delete: `npm run testdelete`
    - just getFileMetada: `npm run testmetadata`
3. A command line report is displayed as the tests are being run. Additionally, a html report is generated. To display it, run:
    - `npm run report`
