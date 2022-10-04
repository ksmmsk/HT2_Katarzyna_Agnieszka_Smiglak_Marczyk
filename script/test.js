const newman = require('newman');

const args = process.argv;
let testcase = "";

switch (args[2]) {
    case 'upload':
        testcase = "Upload test";
        break;
    case 'delete':
        testcase = "Delete test";
        break;
    case 'metadata':
        testcase = "Get File Metadata test";
        break;
}

newman.run({
    collection: require('../postman/DropboxAPITest.postman_collection.json'),
    environment: require('../postman/DropboxEnv.postman_environment.json'),
    folder: testcase,
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            export: './report/report.html',
            logs: true,
            displayProgressBar: true
        }
    }
}, function (err) {
    if (err) { throw err; }
});
