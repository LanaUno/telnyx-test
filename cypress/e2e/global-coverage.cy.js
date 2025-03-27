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
  });

  it("Explore Global coverage form", () => {
    cy.scrollTo("center");
    mainPage.clickGlobalCoverageBtn();
    globalPage.getFirstNameField().should("exist");
    globalPage.typeFirstName();
    globalPage.typeLastName();
    globalPage.typeBusinessEmail();
    globalPage.clickSubmitButton();
    thanksPage.validateThanksMessageExist(($message) => {
      expect($message.text()).to.have.string("Thank you.");
    });
  });

  it("Explore Global Coverage form with invalid email format", () => {
    cy.scrollTo("center");
    mainPage.clickGlobalCoverageBtn();
    globalPage.getFirstNameField().should("exist");
    globalPage.typeFirstName();
    globalPage.typeLastName();
    globalPage.typeWrongEmailFormat();
    globalPage.clickSubmitButton();
    globalPage.validateErrEmailMsg(($message) => {
      expect($message.text()).to.eq("Must be valid email");
    });
  });

  it("Explore Global Coverage form with empty first name field", () => {
    cy.scrollTo("center");
    mainPage.clickGlobalCoverageBtn();
    globalPage.getLastNameField().should("exist");
    globalPage.typeLastName();
    globalPage.typeBusinessEmail();
    globalPage.clickSubmitButton();
    globalPage.validateErrFirstNameMsg(($message) => {
      expect($message.text()).to.eq("This field is required.");
    });
    globalPage.validateErrFirstNameMsgColor();
  });

  it("Explore Global Coverage form with empty last name field", () => {
    cy.scrollTo("center");
    mainPage.clickGlobalCoverageBtn();
    globalPage.getFirstNameField().should("exist");
    globalPage.typeFirstName();
    globalPage.typeBusinessEmail();
    globalPage.clickSubmitButton();
    globalPage.validateErrLastNameMsg(($message) => {
      expect($message.text()).to.eq("This field is required.");
    });
    globalPage.validateErrLastNameMsgColor();
  });
});
