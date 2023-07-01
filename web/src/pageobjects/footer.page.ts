import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FooterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get tomwareImgFooter () {
        return $("(//img[@title='cropped-Tomware-T.png'])");
    }
    public get tomwareContact () {
        return $("(//span[contains(text(),'Kontakt')])");
    }
    public get tomwareGmbHCaption () {
        return $("//span[contains(text(),'2022 TOMWARE GmbH')]");
    }
    public get tomwareImprint () {
        return $("(//span[contains(text(),'Impressum')])");
    }
    public get tomwareTermsofUse () {
        return $("(//span[contains(text(),'Datenschutz')])");
    }
    public get tomwareLogin () {
        return $("(//span[contains(text(),'Login')])");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertFooter(){
        await expect(this.tomwareImgFooter).toBeExisting();
        await expect(this.tomwareContact).toBeExisting();
        await expect(this.tomwareGmbHCaption).toBeExisting();
        await expect(this.tomwareImprint).toBeExisting();
        await expect(this.tomwareTermsofUse).toBeExisting();
        await expect(this.tomwareLogin).toBeExisting();
        await this.clickOnFooterInstances();
    }
    async clickOnFooterInstances(){
        await this.clickContact();
        await this.clickImprint();
        await this.clickTermsofUse();
        await this.clickLogin();
    }
    async clickContact(){
        (await this.tomwareContact).scrollIntoView();
        (await this.tomwareContact).waitForDisplayed();
        (await this.tomwareContact).waitForClickable();
        (await this.tomwareContact).click();
        await browser.pause(1000);
        await driver.back();
    }
    async clickImprint(){
        (await this.tomwareImprint).scrollIntoView();
        (await this.tomwareImprint).waitForDisplayed();
        (await this.tomwareImprint).waitForClickable();
        (await this.tomwareImprint).click();
        await browser.pause(1000);
        await driver.back();
    }
    async clickTermsofUse(){
        (await this.tomwareTermsofUse).scrollIntoView();
        (await this.tomwareTermsofUse).waitForDisplayed();
        (await this.tomwareTermsofUse).waitForClickable();
        (await this.tomwareTermsofUse).click();
        await browser.pause(1000);
        await driver.back();
    }
    async clickLogin(){
        (await this.tomwareLogin).scrollIntoView();
        (await this.tomwareLogin).waitForDisplayed();
        (await this.tomwareLogin).waitForClickable();
        (await this.tomwareLogin).click();
        await browser.pause(1000);
        await driver.back();
        await driver.back();
    }

}

export default new FooterPage();
