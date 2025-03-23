/// <reference types="cypress" />

export class PricingPage {
    getMessagingApiLink = () => cy.get('a[href="/pricing/messaging"]')

    clickMessagingApiLink() {
        this.getMessagingApiLink().click();
        return this;
      }
}