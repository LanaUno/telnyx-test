/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { FormPage } from "./form.page";

const companyName = faker.company.name();
const companyPhone = faker.phone.number({ style: "international" });
const wrongDomain = faker.internet.email();
const website = faker.internet.domainName();

export class MainPage extends FormPage {
  getCookiesBanner = () => cy.get('button:contains("Accept all")', { timeout: 7000 })
  .should('be.visible');
  getContactUsLink = () =>
    cy.get('header >div[class="c-ihSZrZ"]>a[href="/contact-us"]');
  getSignUpLink = () => cy.get('div[class="c-dyVVFl"]>a[href="/sign-up"]');
  getBellCompanyName = () => cy.get("#business_name");
  getWrongDomain = () => cy.get("#domain");
  getDomainName = () => cy.get("#domain");
  getMobilPhone = () => cy.get("#phone_number");
  getTermsAndCondBox = () => cy.get("#terms_and_conditions");
  getBuildMyVoiceBotBtn = () => cy.get('div ~button[type="submit"]');
  getDomainErrMessage = () => cy.get("#domain_message");
  getDomainFieldInErr = () => cy.get("#domain");
  getSorryErrMsg = () =>
    cy.get('div[class="c-iGQXTm"]>h3[class="c-PJLV c-rMlRu"]');
  getPricingLink = () => cy.get('button ~ a[href="/pricing"]');
  getWhyTelnyxBtn = () =>
    cy.get('button[id="radix-:R256jm:"] > span[class="c-swQxl"');
  getPartnersLink = () =>
    cy.get('div>a[href="/partnerships"]');

  clickAcceptAll(){
    this.getCookiesBanner().click()
    return this
  }
  clickContactUsLink() {
    this.getContactUsLink().click();
    return this;
  }
  clickSignUpLink() {
    this.getSignUpLink().click({ force: true });
    return this;
  }
  typeBellCompanyName() {
    this.getBellCompanyName().type(companyName);
    return this;
  }
  typeWrongDomain() {
    this.getWrongDomain().type(wrongDomain);
    return this;
  }
  typeDomainName() {
    this.getDomainName().type(website);
    return this;
  }
  typeMobilePhone() {
    this.getMobilPhone().type(companyPhone);
    return this;
  }
  checkTermsAndCondBox() {
    this.getTermsAndCondBox().check();
    return this;
  }
  clickBuildMyVoiceBotBtn() {
    this.getBuildMyVoiceBotBtn().click();
    return this;
  }
  clickPricingLink() {
    this.getPricingLink().click();
    return this;
  }
  clickWhyTelnyxBtn() {
    this.getWhyTelnyxBtn().click();
    return this;
  }
  clickPartnersLink() {
    this.getPartnersLink().click();
    return this;
  }
}
