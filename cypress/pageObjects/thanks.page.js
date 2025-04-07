/// <reference types="cypress" />

export class ThanksPage {
  getThanksMessage = () => cy.get(".c-fGbiyG > .c-PJLV");

  validateThanksMessageExist() {
    this.getThanksMessage().contains(/Thank/i);
    return this;
  }
}
