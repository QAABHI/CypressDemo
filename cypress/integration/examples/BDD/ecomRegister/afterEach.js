afterEach(() => {
    var today = new Date();
    var date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate();
    var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var endTime = date + '' + time.trim();

    console.log(endTime)
    cy.writeFile('endtime.json', endTime)
});