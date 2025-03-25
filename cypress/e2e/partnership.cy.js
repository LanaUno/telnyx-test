/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { ThanksPage } from "../pageObjects/thanks.page";
import { PartnerPage } from "../pageObjects/partner.page";

const mainPage = new MainPage();
const thanksPage = new ThanksPage();
const partnerPage = new PartnerPage();

describe("Telnyx testing", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it("Become a Partner", () => {
    mainPage.clickWhyTelnyxBtn();
    mainPage.clickPartnersLink();
    cy.scrollTo('0%','75%')
    cy.wait(8000)
    partnerPage.typeFirstName({waitForAnimations: false});
    partnerPage.typeLastName();
    partnerPage.typeCompanyName();
    partnerPage.typeBusinessEmail();
    partnerPage.selectCountry();
    partnerPage.typePhoneNumber();
    partnerPage.getPartnerTypeOption();
    partnerPage.typeAddInfoRequest();
    partnerPage.clickSubmitButton();
    thanksPage.getThanksMessage().should("have.text", "Thank you.");
  });

  it("Too long Phone Number in Become a Partner Form", () => {
    mainPage.clickWhyTelnyxBtn();
    mainPage.clickPartnersLink();
    cy.scrollTo('0%','75%')
    cy.wait(8000)
    partnerPage.typeFirstName();
    partnerPage.typeLastName();
    partnerPage.typeCompanyName();
    partnerPage.typeBusinessEmail();
    partnerPage.selectCountry();
    partnerPage.typeLongPhoneNumber();
    partnerPage.getPartnerTypeOption();
    partnerPage.typeAddInfoRequest();
    partnerPage.clickSubmitButton();
    partnerPage
      .getInvalidPnoneMsg()
      .should("contain", "Phone numbers can have a maximum of 15 digits.");
    partnerPage
      .getInvalidPnoneMsg()
      .should("have.css", "color", "rgb(235, 0, 0)");
  });
  
});
