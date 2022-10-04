const newman = require('newman');

newman.run({
    collection: require('../postman/DropboxAPITest.postman_collection.json'),
    environment: require('../postman/DropboxEnv.postman_environment.json'),
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
    console.log('collection run complete!');
});