/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { SignUpPage } from "../pageObjects/sign-up.page";

const mainPage = new MainPage();
const signUpPage = new SignUpPage();

describe("Testing register form", () => {
    beforeEach(() => {
        mainPage.navigate();
    });
    it("Register an account with password less then 12 characters long", () => {
        mainPage.clickSignUpLink();
        cy.location("pathname").should("eq", "/sign-up");
        signUpPage.getEmailField().should("exist");
        signUpPage.typeEmail();
        signUpPage.getFirstNameField().should("exist");
        signUpPage.typeFirstName();
        signUpPage.getLastNameField().should("exist");
        signUpPage.typeLastName();
        signUpPage.getPasswordField().should("exist");
        signUpPage.typeShortPassword();
        signUpPage.getTersmConditionsBox().should("exist");
        signUpPage.checkTermsConditionsBox();
        signUpPage.getSignUpBtn().should("exist");
        signUpPage.clickSingUpBtn();
        signUpPage.validatePaswErrorLengthMsg(($message) => {
            expect($message.text()).contains(/^12 characters/);
        });
        signUpPage.validatePaswErrorMsgColor();
        signUpPage.validatePaswErrBorderColorField();
    });
    it("Register an account with empty First Name field", () => {
        mainPage.clickSignUpLink();
        cy.location("pathname").should("eq", "/sign-up");
        signUpPage.getEmailField().should("exist");
        signUpPage.typeEmail();
        signUpPage.getLastNameField().should("exist");
        signUpPage.typeLastName();
        signUpPage.getPasswordField().should("exist");
        signUpPage.typePassword();
        signUpPage.getTersmConditionsBox().should("exist");
        signUpPage.checkTermsConditionsBox();
        signUpPage.getSignUpBtn().should("exist");
        signUpPage.clickSingUpBtn();
        signUpPage.validateFirstNameErrMgs(($message) => {
            expect($message.text()).contains(/required/i);
        });
        signUpPage.validateFirstNameErrMgsColor();
        signUpPage.validateFirstNameErrBorderColor();
    });
    it("Register an account with empty Last Name field", () => {
        mainPage.clickSignUpLink();
        cy.location("pathname").should("eq", "/sign-up");
        signUpPage.getEmailField().should("exist");
        signUpPage.typeEmail();
        signUpPage.getFirstNameField().should("exist");
        signUpPage.typeFirstName();
        signUpPage.getPasswordField().should("exist");
        signUpPage.typePassword();
        signUpPage.getTersmConditionsBox().should("exist");
        signUpPage.checkTermsConditionsBox();
        signUpPage.getSignUpBtn().should("exist");
        signUpPage.clickSingUpBtn();
        signUpPage.validateLastNameErrMgs(($message) => {
            expect($message.text()).contains(/required/i);
        });
        signUpPage.validateLastNameErrMgsColor();
        signUpPage.validateLastNameErrBorderColor();
    });
});
