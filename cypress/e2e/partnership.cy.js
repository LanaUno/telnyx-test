/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { PartnerPage } from "../pageObjects/partner.page";

const mainPage = new MainPage();
const partnerPage = new PartnerPage();

describe("Testing Become a parnter form", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it("Too long Phone Number in Become a Partner Form", () => {
    mainPage.clickWhyTelnyxBtn();
    mainPage.clickPartnersLink();
    cy.scrollTo("0%", "75%");
    cy.wait(10000);
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
