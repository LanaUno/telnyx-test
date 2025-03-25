/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { ContactUsPage } from "../pageObjects/contact-us.page";
import { ThanksPage } from "../pageObjects/thanks.page";
import { SignUpPage } from "../pageObjects/sign-up.page";
import { PricingPage } from "../pageObjects/pricing.page";
import { MessagingPage } from "../pageObjects/messaging.page";
import { PartnerPage } from "../pageObjects/partner.page";
import { GlobalPage } from "../pageObjects/global.page";

const globalPage = new GlobalPage();
const mainPage = new MainPage();
const contactUsPage = new ContactUsPage();
const thanksPage = new ThanksPage();
const signUpPage = new SignUpPage();
const pricingPage = new PricingPage();
const messagingPage = new MessagingPage();
const partnerPage = new PartnerPage();

describe('Telnyx form testing', () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
      });
    it('Explore AI form', () => {
      cy.scrollTo('center')
      cy.get('a:contains("Explore global coverage")').click()
      globalPage.typeFirstName()
      globalPage.typeLastName()
      globalPage.typeBusinessEmail()
      globalPage.clickSubmitButton()
      thanksPage.getThanksMessage().should("have.text", "Thank you.");
    })
    it('Explore AI form with invalid email format', () => {
        cy.scrollTo('center')
        cy.get('a:contains("Explore global coverage")').click()
        globalPage.typeFirstName()
        globalPage.typeLastName()
        globalPage.typeWrongEmailFormat()
        globalPage.clickSubmitButton()
        globalPage.getInvalidEmailMsg().should("contain", "Must be valid email");
        
      })
      it('Explore AI form with empty first name field', () => {
        cy.scrollTo('center')
        cy.get('a:contains("Explore global coverage")').click()
        globalPage.typeLastName()
        globalPage.typeBusinessEmail()
        globalPage.clickSubmitButton()
        globalPage.getValidMsgFirstName().should("contain", "This field is required.");
        globalPage.getValidMsgFirstName().should("have.css", "color", "rgb(235, 0, 0)");
        
      })

      it('Explore AI form with empty last name field', () => {
        cy.scrollTo('center')
        cy.get('a:contains("Explore global coverage")').click()
        globalPage.typeFirstName()
        globalPage.typeBusinessEmail()
        globalPage.clickSubmitButton()
        globalPage.getValidMsgLastName().should("contain", "This field is required.");
        globalPage.getValidMsgLastName().should("have.css", "color", "rgb(235, 0, 0)");
        
      })
})