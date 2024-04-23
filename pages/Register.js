class Register
{

    nameTextBox= "div[class='form-group'] input[name='name']"
    emailTextBox= "input[name='email']"
    passwordTextBox="#exampleInputPassword1"
    verifyRadiobtn="#inlineRadio3"
    submitbtn="input[value='Submit']"
    successMsg=".alert.alert-success.alert-dismissible"

    getNameTextBox(name)
    {
        return cy.get(this.nameTextBox).type(name)

    }

    getEmailTextBox(email)
    {
        return cy.get(this.emailTextBox).type(email)
    }

    getPasswordTextBox(pwd)
    {
        return cy.get(this.passwordTextBox).type(pwd)
    }

    selectGender(gender)
    {
        return cy.get('select').select(gender)
    }

    verifyRadioButton()
    {
        return cy.get(this.verifyRadiobtn).should('be.disabled')
    }

    clickSubmit()
    {
        return cy.get(this.submitbtn).click()
    }

    verifySuccessMsg()
    {
        return cy.get(this.successMsg).should('contain', 'Success!')
    }

}
export default Register;