const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

//const data = fs.readFileSync('./cypress/Reports/results.json', { encoding: 'utf8', flag: 'r' });
//const runInfos = JSON.parse(data);


const data = JSON.stringify(fs.readFileSync("./cypress/Reports/results.json", 'utf-8'))
const runInfos = JSON.parse(JSON.parse(data))
console.log(typeof runInfos)




let mapOs = (os) => {
    if(os.startsWith('win')) {
        return 'windows';
    } else if (os.startsWith('darwin')) {
        return 'osx';
    } else if (os.startsWith('linux')) {
        return 'linux';
    } else if (os.startsWith('ubuntu')) {
        return 'ubuntu';
    } else if (os.startsWith('android')) {
        return 'android';
    } else if (os.startsWith('ios')) {
        return 'ios';
    }
};

report.generate({
    jsonDir: './cypress/Reports/',
    reportPath: './cypress/Reports/report.html/',
    metadata:{
        browser: {
            name: runInfos.browserName === 'chromium' ? 'chrome' : runInfos.browserName,
            version: runInfos.browserVersion
        },
        device: 'Cypress',
        platform: {
            name: mapOs(runInfos.osName)
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Todolist'},
            {label: 'Execution Start Time', value: new Date(runInfos.startedTestsAt).toLocaleString()},
            {label: 'Execution End Time', value: new Date(runInfos.endedTestsAt).toLocaleString()}
        ]
    }
});