/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { ContactUsPage } from "../pageObjects/contact-us.page";
import { ThanksPage } from "../pageObjects/thanks.page";
import { SignUpPage } from "../pageObjects/sign-up.page";
import { PricingPage } from "../pageObjects/pricing.page";
import { MessagingPage } from "../pageObjects/messaging.page";
import { PartnerPage } from "../pageObjects/partner.page";

const mainPage = new MainPage();
const contactUsPage = new ContactUsPage();
const thanksPage = new ThanksPage();
const signUpPage = new SignUpPage();
const pricingPage = new PricingPage();
const messagingPage = new MessagingPage();
const partnerPage = new PartnerPage();

describe("Telnyx testing", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
    cy.get('button:contains("Accept all")', { timeout: 7000 })
    .should('be.visible')
    .click({force: true})
  });

  it("User can leave a request to an expert via 'Contact Us' link", () => {
    mainPage.clickContactUsLink();
    contactUsPage.getSelect().should('be.visible');
    contactUsPage.getSupportOption();
    contactUsPage.typeFirstName();
    contactUsPage.typeLastName();
    contactUsPage.typeBusinessEmail();
    contactUsPage.selectCountry();
    contactUsPage.typePhoneNumber();
    contactUsPage.typeWebsite();
    contactUsPage.typeAddInfoRequest();
    contactUsPage.typeHowDidYouHear();
    contactUsPage.clickSubmitButton();
    thanksPage.getThanksMessage().should("have.text", "Thank you.");
  });

  it("User cannot leave a request with invalid email", () => {
    mainPage.clickContactUsLink();
    cy.wait(7000);
    contactUsPage.getSelect().should('be.visible');
    contactUsPage.getSupportOption();
    contactUsPage.typeFirstName();
    contactUsPage.typeLastName();
    contactUsPage.typeInvalidEmail();
    contactUsPage.selectCountry();
    contactUsPage.typePhoneNumber();
    contactUsPage.typeWebsite();
    contactUsPage.typeAddInfoRequest();
    contactUsPage.typeHowDidYouHear();
    contactUsPage.clickSubmitButton();
    contactUsPage.getInvalidEmailMsg().should("contain", "Must be valid email");
    contactUsPage.getInvalidEmailMsg().should("have.css", "color", "rgb(235, 0, 0)");
  });

  it("User cannot register an account with password less then 12 characters long", () => {
    mainPage.clickSignUpLink();
    signUpPage.typeEmail();
    signUpPage.typeFirstName();
    signUpPage.typeLastName();
    signUpPage.typeShortPassword();
    signUpPage.checkTermsConditionsBox();
    signUpPage.clickSingUpBtn();
    signUpPage
      .getPaswErrorLengthMsg()
      .should("have.text", "Password must be at least 12 characters.");
    signUpPage
      .getPaswErrorLengthMsg()
      .should("have.css", "color", "rgb(235, 0, 0)");
    signUpPage
      .getPasswordInErrField()
      .should("have.css", "border-color", "rgb(235, 0, 0)");
  });

  it("Register an account with empty First Name field", () => {
    mainPage.clickSignUpLink();
    signUpPage.typeEmail();
    signUpPage.typeLastName();
    signUpPage.typePassword();
    signUpPage.checkTermsConditionsBox();
    signUpPage.clickSingUpBtn();
    signUpPage.getFirstNameErrMsg().should("contain", "This field is required");
    signUpPage
      .getFirstNameErrMsg()
      .should("have.css", "color", "rgb(235, 0, 0)");
    signUpPage
      .getFirstNameInErrField()
      .should("have.css", "border-color", "rgb(235, 0, 0)");
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

  it("Fill the form to recieve a call with no checked Captcha", () => {
    mainPage.typeBellCompanyName();
    mainPage.typeDomainName();
    mainPage.typeMobilePhone();
    mainPage.typeEmail();
    mainPage.checkTermsAndCondBox();
    mainPage.clickBuildMyVoiceBotBtn();
    mainPage.getSorryErrMsg().should("contain", "Sorry, there was an error");
  });

  it("Get pricing", () => {
    mainPage.clickPricingLink();
    pricingPage.clickMessagingApiLink();
    messagingPage
      .getMessagingHeader()
      .should("have.text", "Messaging API pricing");
    messagingPage.scrollToCenter();
    cy.wait(7000)
    messagingPage.typeFirstName();
    messagingPage.typeLastName();
    messagingPage.typeBusinessEmail();
    messagingPage.clickSubmitButton();
    thanksPage.getThanksMessage().should("contain", "Thank you");
  });

  it("Become a Partner", () => {
    mainPage.clickWhyTelnyxBtn();
    mainPage.clickPartnersLink();
    partnerPage.clickBecomePartnerLink();
    cy.wait(5000)
    partnerPage.typeFirstName();
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
    partnerPage.clickBecomePartnerLink();
    cy.wait(5000)
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

  it("Wrong email format in Become a Partner Form", () => {
    mainPage.clickWhyTelnyxBtn();
    mainPage.clickPartnersLink();
    partnerPage.clickBecomePartnerLink();
    cy.wait(5000)
    partnerPage.typeFirstName();
    partnerPage.typeLastName();
    partnerPage.typeCompanyName();
    partnerPage.typeWrongEmailFormat();
    partnerPage.selectCountry();
    partnerPage.typePhoneNumber();
    partnerPage.getPartnerTypeOption();
    partnerPage.typeAddInfoRequest();
    partnerPage.clickSubmitButton();
    partnerPage.getInvalidEmailMsg().should("contain", "Must be valid email");
    partnerPage.getInvalidEmailMsg().should("have.css", "color", "rgb(235, 0, 0)");
  });
});
