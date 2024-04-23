beforeEach(()=>
{
    cy.fixture('testdata').then(function(data)
    {
this.data=data
    })
    var today = new Date();
    var date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
    var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var startTime = date+''+time.trim();
    
    console.log(startTime)
    cy.writeFile('starttime.json',startTime)
});