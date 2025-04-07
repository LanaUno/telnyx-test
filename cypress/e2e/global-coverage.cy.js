/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { ThanksPage } from "../pageObjects/thanks.page";
import { GlobalPage } from "../pageObjects/global.page";

const globalPage = new GlobalPage();
const mainPage = new MainPage();
const thanksPage = new ThanksPage();

describe("Testing Global coverage form", () => {
    beforeEach(() => {
        mainPage.navigate();
        mainPage.getGlobalCoverageBtn().scrollIntoView();
    });
    it("Explore Global coverage form", () => {
        mainPage.clickGlobalCoverageBtn();
        cy.location("pathname").should("eq", "/global-coverage");
        globalPage.getFirstNameField().should("exist");
        globalPage.typeFirstName();
        globalPage.getLastNameField().should("exist");
        globalPage.typeLastName();
        globalPage.getBusinessEmailField().should("exist");
        globalPage.typeBusinessEmail();
        globalPage.getSubmitButton().should("exist");
        globalPage.clickSubmitButton();
        cy.location("pathname").should("eq", "/thank-you");
        thanksPage.validateThanksMessageExist(($message) => {
            expect($message.text()).to.have.string("Thank you.");
        });
        thanksPage.validateThanksMessageExist(($message) => {
            expect($message.text()).contains(/thank/i);
        });
    });
    it("Explore Global Coverage form with invalid email format", () => {
        mainPage.clickGlobalCoverageBtn();
        cy.location("pathname").should("eq", "/global-coverage");
        globalPage.getFirstNameField().should("exist");
        globalPage.typeFirstName();
        globalPage.getLastNameField().should("exist");
        globalPage.typeLastName();
        globalPage.getBusinessEmailField().should("exist");
        globalPage.typeWrongEmailFormat();
        globalPage.getSubmitButton().should("exist");
        globalPage.clickSubmitButton();
        globalPage.validateErrEmailMsg(($message) => {
            expect($message.text()).contains(/valid email/i);
        });
    });
    it("Explore Global Coverage form with empty first name field", () => {
        mainPage.clickGlobalCoverageBtn();
        cy.location("pathname").should("eq", "/global-coverage");
        globalPage.getLastNameField().should("exist");
        globalPage.typeLastName();
        globalPage.getBusinessEmailField().should("exist");
        globalPage.typeBusinessEmail();
        globalPage.getSubmitButton().should("exist");
        globalPage.clickSubmitButton();
        globalPage.validateErrFirstNameMsg(($message) => {
            expect($message.text()).contains(/required/i);
        });
        globalPage.validateErrFirstNameMsgColor();
    });
    it("Explore Global Coverage form with empty last name field", () => {
        mainPage.clickGlobalCoverageBtn();
        cy.location("pathname").should("eq", "/global-coverage");
        globalPage.getFirstNameField().should("exist");
        globalPage.typeFirstName();
        globalPage.getBusinessEmailField().should("exist");
        globalPage.typeBusinessEmail();
        globalPage.getSubmitButton().should("exist");
        globalPage.clickSubmitButton();
        globalPage.validateErrLastNameMsg(($message) => {
            expect($message.text()).contains(/required/i);
        });
        globalPage.validateErrLastNameMsgColor();
    });
});
