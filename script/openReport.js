const open = require('open')

const report = async function () {
    await open('./report/report.html')
    }

report();