/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";

const mainPage = new MainPage();

describe("Testing recieve a call form", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it("Fill the form with wrong Domain type", () => {
    mainPage.typeBellCompanyName();
    mainPage.typeWrongDomain();
    mainPage.typeMobilePhone();
    mainPage.typeEmail();
    mainPage.checkTermsAndCondBox();
    mainPage.clickBuildMyVoiceBotBtn();
    mainPage
      .getDomainErrMessage()
      .should("contain", "Please enter a valid Domain name.");
    mainPage
      .getDomainErrMessage()
      .should("have.css", "color", "rgb(235, 0, 0)");
    mainPage
      .getDomainFieldInErr()
      .should("have.css", "border-color", "rgb(235, 0, 0)");
  });

  it("Fill the form with no checked Captcha", () => {
    mainPage.typeBellCompanyName();
    mainPage.typeDomainName();
    mainPage.typeMobilePhone();
    mainPage.typeEmail();
    mainPage.checkTermsAndCondBox();
    mainPage.clickBuildMyVoiceBotBtn();
    mainPage.getSorryErrMsg().should("contain", "Sorry, there was an error");
  });
});
