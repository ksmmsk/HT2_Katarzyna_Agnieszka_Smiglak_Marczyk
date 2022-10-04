# Dropbox API test
## Testing automation project using Postman

Technologies used:
- Postman
- Newman
The tests are implemented in one collection, with each test case in its own folder to allow for running all the test cases at once or just a selected test case.

## Prerequisites
- Node.js and npm installed

## Setup
1. Clone this repository
2. Navigate to the main project folder
3. Install newman with `npm install -g newman`

## Running test suite
1. Open the main project folder in terminal
2. Run the tests:
- `npm run testall` for all the tests
- `npm run testselect '[TEST CASE]'` with the right argument for one test case:
    - `npm run testselect 'Upload test'` 
    - `npm run testselect 'Delete test'`
    - `npm run testselect 'Get File Metadata test'`
