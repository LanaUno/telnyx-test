/// <reference types="cypress" />
import { FormPage } from "./form.page";
export class PartnerPage extends FormPage{
    getBecomePartnerLink = () => cy.get('#7AeuoQUBii1Hm1wmqCy9c');
    getPartnerTypeOption = () =>
        cy.get('select[id="Form_Partner_Type__c"]', { timeout: 7000 })
          .select("SaaS / ISV / Tech");
    getInvalidPnoneMsg = () => cy.get('#ValidMsgPhone_Number_Base__c')

    clickBecomePartnerLink () {
        this.getBecomePartnerLink().click()
        return this
    }
}