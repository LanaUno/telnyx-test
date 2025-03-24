/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { ContactUsPage } from "./contact-us.page";
import { FormPage } from "./form.page";



const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const businessEmail = faker.internet.email();
const phone = faker.number.int({ min: 100000000, max: 999999999 });
const website = faker.internet.domainName();
const request = faker.lorem.words(2);
const source = faker.lorem.word();
const invalidEmail = 'test&gmail.com'

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