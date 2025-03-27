/// <reference types="cypress" />

export class ThanksPage {
  getThanksMessage = () => cy.get(".c-fGbiyG > .c-PJLV");

  validateThanksMessageExist() {
    this.getThanksMessage().should("have.text", "Thank you.");
    return this;
  }
}
