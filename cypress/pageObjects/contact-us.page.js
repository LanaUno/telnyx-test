/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { FormPage } from "./form.page";

const website = faker.internet.domainName();
const source = faker.lorem.word();
const invalidEmail = "test&gmail.com";

export class ContactUsPage extends FormPage {
  getSelect = () =>
    cy.get('select[id="Reason_for_Contact__c"]', {timeout: 18000}).select("Select");
  getSupportOption = () =>
    cy
      .get('select[id="Reason_for_Contact__c"]')
      .select("Support", { force: true })
      .invoke("val")
      .should("eq", "Support");
  getWebsiteField = () => cy.get("#Website");
  getHowDidYouHearField = () =>
    cy.get("#How_did_you_hear_about_Telnyx_Open__c");

  typeWebsite() {
    this.getWebsiteField().type(website);
    return this;
  }
  typeHowDidYouHear() {
    this.getHowDidYouHearField().type(source);
  }
  typeInvalidEmail() {
    this.getBusinessEmailField().type(invalidEmail);
    return this;
  }
}
