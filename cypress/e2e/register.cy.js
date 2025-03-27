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
    signUpPage.typeEmail();
    signUpPage.typeFirstName();
    signUpPage.typeLastName();
    signUpPage.typeShortPassword();
    signUpPage.checkTermsConditionsBox();
    signUpPage.clickSingUpBtn();
    signUpPage.validatePaswErrorLengthMsg(($message) => {
      expect($message.text()).to.eq("Password must be at least 12 characters.");
    });
    signUpPage.validatePaswErrorMsgColor();
    signUpPage.validatePaswErrBorderColorField();
  });

  it("Register an account with empty First Name field", () => {
    mainPage.clickSignUpLink();
    signUpPage.typeEmail();
    signUpPage.typeLastName();
    signUpPage.typePassword();
    signUpPage.checkTermsConditionsBox();
    signUpPage.clickSingUpBtn();
    signUpPage.validateFirstNameErrMgs(($message) => {
      expect($message.text()).to.eq("This field is required");
    });
    signUpPage.validateFirstNameErrMgsColor();
    signUpPage.validateFirstNameErrBorderColor();
  });

  it("Register an account with empty Last Name field", () => {
    mainPage.clickSignUpLink();
    signUpPage.typeEmail();
    signUpPage.typeFirstName();
    signUpPage.typePassword();
    signUpPage.checkTermsConditionsBox();
    signUpPage.clickSingUpBtn();
    signUpPage.validateLastNameErrMgs(($message) => {
      expect($message.text()).to.eq("This field is required");
    });
    signUpPage.validateLastNameErrMgsColor();
    signUpPage.validateLastNameErrBorderColor();
  });
});
