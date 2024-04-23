const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

function getBrowserDetails() {
    const strigifyData = JSON.stringify(fs.readFileSync("./browserDetails.json", 'utf-8'))
    const parsedData = JSON.parse(JSON.parse(strigifyData))
    console.log(typeof parsedData)
    return parsedData;

}

function getStartTime() {
    const strigifyData = JSON.stringify(fs.readFileSync("./starttime.json", 'utf-8'))
    const parsedData = JSON.parse(JSON.parse(strigifyData))
    console.log(typeof parsedData)
    return parsedData;
}

function getEndTime() {
    const strigifyData = JSON.stringify(fs.readFileSync("./endtime.json", 'utf-8'))
    const parsedData = JSON.parse(JSON.parse(strigifyData))
    console.log(typeof parsedData)
    return parsedData;
}

function getOSDetails() {
    const strigifyData = JSON.stringify(fs.readFileSync("./OSDetails.json", 'utf-8'))
    const parsedData = JSON.parse(JSON.parse(strigifyData))
    console.log(typeof parsedData)
    return parsedData;
}


const browserDetails = getBrowserDetails();
const starttime = getStartTime();
const endtime = getEndTime();
const osname = getOSDetails();


report.generate({
    jsonDir: './cypress/Reports',
    reportPath: 'cypress/Reports/report.html',
    pageTitle:'Cypress Demo',
    displayDuration: false,
    metadata: {
        browser: {
            name: browserDetails.name,
            version: browserDetails.version
        },
        device: 'Cypress',
        platform: {
            name: 'osx',
            version: '14.4.1'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'CypressDemo' },
            { label: 'Release', value: '1.0' },
            { label: 'Cycle', value: 'B11221.34321' },
            { label: 'Execution Start Time', value: starttime },
            { label: 'Execution End Time', value: endtime }
        ]
    }
});