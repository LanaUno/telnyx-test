/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { PartnerPage } from "../pageObjects/partner.page";

const mainPage = new MainPage();
const partnerPage = new PartnerPage();

describe("Testing Become a parnter form", () => {
  beforeEach(() => {
    mainPage.navigate();
  });

  it("Too long Phone Number in Become a Partner Form", () => {
    mainPage.clickWhyTelnyxBtn();
    mainPage.clickPartnersLink({ force: true });
    partnerPage.getBecomeAPartnerFormHeader().scrollIntoView();
    cy.location("pathname").should("eq", "/partnerships");
    partnerPage.getFirstNameField().should("exist");
    partnerPage.typeFirstName();
    partnerPage.getLastNameField().should("exist");
    partnerPage.typeLastName();
    partnerPage.getCompanyName().should("exist");
    partnerPage.typeCompanyName();
    partnerPage.getBusinessEmailField().should("exist");
    partnerPage.typeBusinessEmail();
    partnerPage.getCountryExt().should("exist");
    partnerPage.selectCountry();
    partnerPage.getPhoneNumberField().should("exist");
    partnerPage.typeLongPhoneNumber();
    partnerPage.getPartnerTypeOption();
    partnerPage.getAddInfoRequestField().should("exist");
    partnerPage.typeAddInfoRequest();
    partnerPage.clickSubmitButton();
    partnerPage.validateInvalidPhoneMsg()
    partnerPage.getInvalidPnoneMsg().should(($message) => {
      expect($message.text()).to.be.a('string');
    });
    partnerPage.getInvalidPnoneMsg().should(($message) => {
      expect($message.text()).to.match(/15 digits/i);
    });
    partnerPage.validateInvalidPhoneMsgColor();
  });
});
