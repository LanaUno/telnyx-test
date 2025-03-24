/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { FormPage } from "./form.page";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const shortPassword = faker.internet.password({
  length: 11,
  pattern: /[0-9A-z_@]/,
  prefix: "1@",
});
const password = faker.internet.password({
  length: 12,
  pattern: /[0-9A-z_@]/,
  prefix: "1@",
});

export class SignUpPage extends FormPage {
  getFirstNameField = () => cy.get("#first_name");
  getLastNameField = () => cy.get("#last_name");
  getPasswordField = () => cy.get("#password");
  getTersmConditionsBox = () => cy.get("#terms_and_conditions");
  getSignUpBtn = () => cy.get('button[type="submit"]').contains("SIGN UP");
  getPaswErrorLengthMsg = () => cy.get("#passwordMinLength");
  getPasswordInErrField = () => cy.get("#password");
  getFirstNameErrMsg = () => cy.get("#first_name_message");
  getFirstNameInErrField = () => cy.get("#first_name");

  typeFirstName() {
    this.getFirstNameField().type(firstName);
    return this;
  }
  typeLastName() {
    this.getLastNameField().type(lastName);
    return this;
  }
  typePassword() {
    this.getPasswordField().type(password);
    return this;
  }
  typeShortPassword() {
    this.getPasswordField().type(shortPassword);
    return this;
  }
  checkTermsConditionsBox() {
    this.getTersmConditionsBox().check();
    return this;
  }
  clickSingUpBtn() {
    this.getSignUpBtn().click();
    return this;
  }
}
