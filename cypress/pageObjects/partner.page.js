/// <reference types="cypress" />
import { FormPage } from "./form.page";
export class PartnerPage extends FormPage {
  getPartnerTypeOption = () =>
    cy
      .get('select[id="Form_Partner_Type__c"]', { timeout: 7000 })
      .select("SaaS / ISV / Tech");
  getInvalidPnoneMsg = () => cy.get("#ValidMsgPhone_Number_Base__c");

  validateInvalidPhoneMsg() {
    this.getInvalidPnoneMsg().should(
      "contain",
      "Phone numbers can have a maximum of 15 digits."
    );
  }
  validateInvalidPhoneMsgColor() {
    this.getInvalidPnoneMsg().should("have.css", "color", "rgb(235, 0, 0)");
  }
}
