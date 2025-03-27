/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";

const mainPage = new MainPage();

describe("Testing recieve a call form", () => {
  beforeEach(() => {
    mainPage.navigate();
  });

  it("Fill the form with wrong Domain type", () => {
    mainPage.typeBellCompanyName();
    mainPage.typeWrongDomain();
    mainPage.typeMobilePhone();
    mainPage.typeEmail();
    mainPage.checkTermsAndCondBox();
    mainPage.clickBuildMyVoiceBotBtn();
    mainPage.validateDomainNameErrMsg(($message) => {
      expect($message.text()).to.eq("Please enter a valid Domain name.");
    });
    mainPage.validateDomainNameErrMsgColor();
    mainPage.validateDomainNameBorderColor();
  });

  it("Fill the form with no checked Captcha", () => {
    mainPage.typeBellCompanyName();
    mainPage.typeDomainName();
    mainPage.typeMobilePhone();
    mainPage.typeEmail();
    mainPage.checkTermsAndCondBox();
    mainPage.clickBuildMyVoiceBotBtn();
    mainPage.validateSorryErrMsg(($message) => {
      expect($message.text()).to.eq("Sorry, there was an error");
    });
  });
});
