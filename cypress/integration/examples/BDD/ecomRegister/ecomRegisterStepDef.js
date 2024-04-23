/// <reference types="Cypress" />
import Register from '../../../../../pages/Register.js'
import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
const register = new Register()
//Navigate to the form
Given("Navigate to ecommerce registration page", () => 
{

    cy.visit(Cypress.env('url')+"/angularpractice/");
}
);

  //User fills the form details
  When("User input all the form details", function()
  {
    register.getNameTextBox(this.data.name)
    register.getEmailTextBox(this.data.email)
    register.getPasswordTextBox('pwd')
    register.selectGender(this.data.gender)
    register.clickSubmit()
 
  }
  );


  //Validate success message & enterprenuer radiobutton disabled
  Then("User should view an success message", () =>
  {
    register.verifyRadioButton()
    register.verifySuccessMsg()

  }
  );
