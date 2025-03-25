/// <reference types="cypress" />

import { FormPage } from "./form.page";

export class GlobalPage extends FormPage {
  getValidMsgFirstName = () => cy.get("#ValidMsgFirstName", { timeout: 8000});
  getValidMsgLastName = () => cy.get('#ValidMsgLastName');
}
