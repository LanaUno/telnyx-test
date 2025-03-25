/// <reference types="cypress" />

import { FormPage } from "./form.page";

export class GlobalPage extends FormPage {
  getValidMsgFirstName = () => cy.get("#ValidMsgFirstName");
  getValidMsgLastName = () => cy.get('#ValidMsgLastName');
}
