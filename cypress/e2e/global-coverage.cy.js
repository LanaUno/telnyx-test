/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { ThanksPage } from "../pageObjects/thanks.page";
import { GlobalPage } from "../pageObjects/global.page";

const globalPage = new GlobalPage();
const mainPage = new MainPage();
const thanksPage = new ThanksPage();

describe('Telnyx form testing', () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
      });
    it('Explore Global coverage form', () => {
      cy.scrollTo('center')
      mainPage.clickGlobalCoverageBtn()
      globalPage.getFirstNameField().should('exist')
      globalPage.typeFirstName()
      globalPage.typeLastName()
      globalPage.typeBusinessEmail()
      globalPage.clickSubmitButton()
      thanksPage.getThanksMessage().should("have.text", "Thank you.");
    })
    it('Explore Global Coverage form with invalid email format', () => {
        cy.scrollTo('center')
        mainPage.clickGlobalCoverageBtn()
        globalPage.getFirstNameField().should('exist')
        globalPage.typeFirstName()
        globalPage.typeLastName()
        globalPage.typeWrongEmailFormat()
        globalPage.clickSubmitButton()
        globalPage.getInvalidEmailMsg().should("contain", "Must be valid email");
        
      })
      it('Explore Global Coverage form with empty first name field', () => {
        cy.scrollTo('center')
        mainPage.clickGlobalCoverageBtn()
        globalPage.getLastNameField().should('exist')
        globalPage.typeLastName()
        globalPage.typeBusinessEmail()
        globalPage.clickSubmitButton()
        globalPage.getValidMsgFirstName().should("contain", "This field is required.");
        globalPage.getValidMsgFirstName().should("have.css", "color", "rgb(235, 0, 0)");
        
      })

      it('Explore Global Coverage form with empty last name field', () => {
        cy.scrollTo('center')
        mainPage.clickGlobalCoverageBtn()
        globalPage.getFirstNameField().should('exist')
        globalPage.typeFirstName()
        globalPage.typeBusinessEmail()
        globalPage.clickSubmitButton()
        globalPage.getValidMsgLastName().should("contain", "This field is required.");
        globalPage.getValidMsgLastName().should("have.css", "color", "rgb(235, 0, 0)");
        
      })
})