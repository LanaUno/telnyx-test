/// <reference types="cypress" />

import { FormPage } from "./form.page";

export class GlobalPage extends FormPage {
    getErrMsgFirstName = () => cy.get("#ValidMsgFirstName");
    getErrMsgLastName = () => cy.get("#ValidMsgLastName");

    validateErrEmailMsg() {
        this.getInvalidEmailMsg().should("have.class", "mktoErrorMsg");
        return this;
    }
    validateErrFirstNameMsg() {
        this.getErrMsgFirstName().should("have.class", "mktoErrorMsg");
        return this;
    }
    validateErrFirstNameMsgColor() {
        this.getErrMsgFirstName().should("have.css", "color", "rgb(235, 0, 0)");
        return this;
    }
    validateErrLastNameMsg() {
        this.getErrMsgLastName().should("have.class", "mktoErrorMsg");
        return this;
    }
    validateErrLastNameMsgColor() {
        this.getErrMsgLastName().should("have.css", "color", "rgb(235, 0, 0)");
        return this;
    }
}
