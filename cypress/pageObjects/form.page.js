/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const businessEmail = faker.internet.email();
const companyName = faker.company.name();
const companyPhone = faker.phone.number({ style: "international" });
const phone = faker.number.int({ min: 100000000, max: 999999999 });
const request = faker.lorem.words(2);
const longPnoneNumber = faker.phone.number({ style: 'human' })
const wrongEmailFormat = faker.internet.email({allowSpecialCharacters: true});

export class FormPage {
  getFirstNameField = () => cy.get("#FirstName");
  getLastNameField = () => cy.get("#LastName");
  getBusinessEmailField = () => cy.get("#Email");
  getCompanyName = () => cy.get("#Company");
  getCountryExt = () => cy.get("#Phone_Number_Extension__c");
  getPhoneNumberField = () => cy.get("#Phone_Number_Base__c");
  getAddInfoRequestField = () => cy.get("#Form_Additional_Information__c");
  getSubmitButton = () => cy.get('button[type="submit"]');
  getWrongEmailFormat = () => cy.get("#Phone_Number_Base__c");
  getInvalidEmailMsg = () => cy.get("#ValidMsgEmail");
  getEmailField = () => cy.get("#email");
 
  typeFirstName() {
    this.getFirstNameField().type(firstName);
    return this;
  }
  typeLastName() {
    this.getLastNameField().type(lastName);
    return this;
  }
  typeBusinessEmail() {
    this.getBusinessEmailField().type(businessEmail);
    return this;
  }
  typeEmail() {
    this.getEmailField().type(businessEmail);
    return this;
  }
  typeCompanyName() {
    this.getCompanyName().type(companyName);
    return this;
  }
  typeMobilePhone() {
    this.getMobilPhone().type(companyPhone);
    return this;
  }
  selectCountry() {
    this.getCountryExt().select("Ukraine (+380)");
    return this;
  }
  typePhoneNumber() {
    this.getPhoneNumberField().type(phone);
    return this;
  }
  typeWrongEmailFormat() {
    this.getWrongEmailFormat().type(wrongEmailFormat);
    return this;
  }
  typeLongPhoneNumber() {
    this.getPhoneNumberField().type(longPnoneNumber);
    return this;
  }
  typeAddInfoRequest() {
    this.getAddInfoRequestField().type(request);
    return this;
  }
  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }
}
