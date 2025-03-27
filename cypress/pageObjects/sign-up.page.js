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
  getFirstNameErrMsg = () => cy.get("#first_name_message");
  getLastNameErrMsg = () => cy.get("#last_name_message");

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
  validatePaswErrorLengthMsg() {
    this.getPaswErrorLengthMsg().should(
      "have.text",
      "Password must be at least 12 characters."
    );
    return this;
  }
  validatePaswErrorMsgColor() {
    this.getPaswErrorLengthMsg().should("have.css", "color", "rgb(235, 0, 0)");
    return this;
  }
  validatePaswErrBorderColorField() {
    this.getPasswordField().should(
      "have.css",
      "border-color",
      "rgb(235, 0, 0)"
    );
    return this;
  }
  validateFirstNameErrMgs() {
    this.getFirstNameErrMsg().should("contain", "This field is required");
    return this;
  }
  validateFirstNameErrMgsColor() {
    this.getFirstNameErrMsg().should("have.css", "color", "rgb(235, 0, 0)");
    return this;
  }
  validateFirstNameErrBorderColor() {
    this.getFirstNameField().should(
      "have.css",
      "border-color",
      "rgb(235, 0, 0)"
    );
    return this;
  }
  validateLastNameErrMgs() {
    this.getLastNameErrMsg().should("contain", "This field is required");
    return this;
  }
  validateLastNameErrMgsColor() {
    this.getLastNameErrMsg().should("have.css", "color", "rgb(235, 0, 0)");
    return this;
  }
  validateLastNameErrBorderColor() {
    this.getLastNameField().should(
      "have.css",
      "border-color",
      "rgb(235, 0, 0)"
    );
    return this;
  }
}
