/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { FormPage } from "./form.page";

const companyName = faker.company.name();
const companyPhone = faker.phone.number({ style: "international" });
const wrongDomain = faker.internet.email();
const website = faker.internet.domainName();

export class MainPage extends FormPage {
  getSignUpLink = () => cy.get('div[class="c-dyVVFl"]>a[href="/sign-up"]');
  getBellCompanyName = () => cy.get("#business_name");
  getDomainName = () => cy.get("#domain");
  getMobilPhone = () => cy.get("#phone_number");
  getTermsAndCondBox = () => cy.get("#terms_and_conditions");
  getBuildMyVoiceBotBtn = () => cy.get('div ~button[type="submit"]');
  getDomainErrMessage = () => cy.get("#domain_message");
  getSorryErrMsg = () =>
    cy.get('div[class="c-iGQXTm"]>h3[class="c-PJLV c-rMlRu"]', {
      timeout: 5000,
    });
  getWhyTelnyxBtn = () => cy.get('button[id="radix-:R256jm:"]');
  getPartnersLink = () => cy.get('div>a[href="/partnerships"]');
  getGlobalCoverageBtn = () => cy.get('a:contains("Explore global coverage")');

  navigate() {
    cy.visit("https://telnyx.com/");
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
    this.getDomainName().type(wrongDomain);
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
  clickWhyTelnyxBtn() {
    this.getWhyTelnyxBtn().click();
    return this;
  }
  clickPartnersLink() {
    this.getPartnersLink().click({ force: true });
    return this;
  }
  clickGlobalCoverageBtn() {
    this.getGlobalCoverageBtn().click({ force: true });
    return this;
  }
  validateDomainNameErrMsg() {
    this.getDomainErrMessage().should(
      "contain",
      "Please enter a valid Domain name."
    );
    return this;
  }
  validateDomainNameErrMsgColor() {
    this.getDomainErrMessage().should("have.css", "color", "rgb(235, 0, 0)");
    return this;
  }
  validateDomainNameBorderColor() {
    this.getDomainName().should("have.css", "border-color", "rgb(235, 0, 0)");
    return this;
  }
  validateSorryErrMsg() {
    this.getSorryErrMsg().should("contain", "Sorry, there was an error");
    return this;
  }
}
