/// <reference types="cypress" />

import { FormPage } from "./form.page";

export class MessagingPage extends FormPage {
  getMessagingHeader = () => cy.get('h1 > span[class="c-PJLV"]');
  scrollToCenter = () => cy.scrollTo("center");
}
