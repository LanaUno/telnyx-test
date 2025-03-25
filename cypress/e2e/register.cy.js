/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";
import { SignUpPage } from "../pageObjects/sign-up.page";

const mainPage = new MainPage();
const signUpPage = new SignUpPage();

describe("Telnyx testing", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
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
});
