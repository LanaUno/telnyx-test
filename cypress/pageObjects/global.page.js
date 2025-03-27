/// <reference types="cypress" />

import { FormPage } from "./form.page";

export class GlobalPage extends FormPage {
  getErrMsgFirstName = () => cy.get("#ValidMsgFirstName");
  getErrMsgLastName = () => cy.get("#ValidMsgLastName");

  validateErrEmailMsg() {
    this.getInvalidEmailMsg().should("contain", "Must be valid email");
    return this;
  }
  validateErrFirstNameMsg() {
    this.getErrMsgFirstName().should("contain", "This field is required.");
    return this;
  }
  validateErrFirstNameMsgColor() {
    this.getErrMsgFirstName().should("have.css", "color", "rgb(235, 0, 0)");
    return this;
  }
  validateErrLastNameMsg() {
    this.getErrMsgLastName().should("contain", "This field is required.");
    return this;
  }
  validateErrLastNameMsgColor() {
    this.getErrMsgLastName().should("have.css", "color", "rgb(235, 0, 0)");
    return this;
  }
}
