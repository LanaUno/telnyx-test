/// <reference types="cypress" />
import { FormPage } from "./form.page";
export class PartnerPage extends FormPage {
    getPartnerTypeOption = () =>
        cy
            .get('select[id="Form_Partner_Type__c"]', { timeout: 7000 })
            .select("SaaS / ISV / Tech");
    getInvalidPnoneMsg = () => cy.get("#ValidMsgPhone_Number_Base__c");
    getBecomeAPartnerFormHeader = () =>
        cy.get(".c-PJLV.c-fKwEGa.c-PJLV-cvZNBt-dark-false.c-frvnKx");

    validateInvalidPhoneMsg() {
        this.getInvalidPnoneMsg().should("have.class", "mktoErrorMsg");
    }
    validateInvalidPhoneMsgColor() {
        this.getInvalidPnoneMsg().should("have.css", "color", "rgb(235, 0, 0)");
    }
}
