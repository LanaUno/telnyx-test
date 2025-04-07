/// <reference types="cypress" />
import { MainPage } from "../pageObjects/main.page";

const mainPage = new MainPage();

describe("Testing recieve a call form", () => {
    beforeEach(() => {
        mainPage.navigate();
    });

    it("Fill the form with wrong Domain type", () => {
        mainPage.getBellCompanyName().should("exist");
        mainPage.typeBellCompanyName();
        mainPage.getDomainName().should("exist");
        mainPage.typeWrongDomain();
        mainPage.getMobilPhone().should("exist");
        mainPage.typeMobilePhone();
        mainPage.getEmailField().should("exist");
        mainPage.typeEmail();
        mainPage.getTermsAndCondBox().should("exist");
        mainPage.checkTermsAndCondBox();
        mainPage.getBuildMyVoiceBotBtn().should("exist");
        mainPage.clickBuildMyVoiceBotBtn();
        mainPage.validateDomainNameErrMsg(($message) => {
            expect($message.text()).contains(/^valid Domain/);
        });
        mainPage.validateDomainNameErrMsgColor();
        mainPage.validateDomainNameBorderColor();
    });

    it("Fill the form with no checked Captcha", () => {
        mainPage.getBellCompanyName().should("exist");
        mainPage.typeBellCompanyName();
        mainPage.getDomainName().should("exist");
        mainPage.typeDomainName();
        mainPage.getMobilPhone().should("exist");
        mainPage.typeMobilePhone();
        mainPage.getEmailField().should("exist");
        mainPage.typeEmail();
        mainPage.getTermsAndCondBox().should("exist");
        mainPage.checkTermsAndCondBox();
        mainPage.getBuildMyVoiceBotBtn().should("exist");
        mainPage.clickBuildMyVoiceBotBtn();
        mainPage.validateSorryErrMsg(($message) => {
            expect($message.text()).contains(/^Sorry/);
        });
    });
});
