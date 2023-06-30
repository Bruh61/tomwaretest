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
        return $("div[class='elementor-element elementor-element-3dfa24b3 elementor-widget elementor-widget-image'] img[title='cropped-Tomware-T.png']");
    }
    public get contact () {
        return $("section[class='elementor-section elementor-inner-section elementor-element elementor-element-5b6d70b8 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default'] li:nth-child(1) a:nth-child(1)");
    }
    public get tomwareGmbHCaption () {
        return $("body > div:nth-child(16) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)");
    }
    public get tomwareImprint () {
        return $("body > div:nth-child(16) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)");
    }
    public get tomwareTermsofUse () {
        return $("div[class='elementor-element elementor-element-acb1417 elementor-align-center elementor-mobile-align-center elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list'] li:nth-child(1) a:nth-child(1)");
    }
    public get tomwareLogin () {
        return $("body > div:nth-child(16) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1) > span:nth-child(2)");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertFooter(){
        await expect(this.tomwareImgFooter).toBeExisting();
        await expect(this.contact).toBeExisting();
        await expect(this.contact).toHaveTextContaining("Kontakt");
        await expect(this.tomwareGmbHCaption).toBeExisting();
        await expect(this.tomwareGmbHCaption).toHaveTextContaining("2022 TOMWARE GmbH");
        await expect(this.tomwareImprint).toBeExisting();
        //await expect(this.tomwareImprint).toHaveTextContaining("Impressum");
        await expect(this.tomwareTermsofUse).toBeExisting();
        await expect(this.tomwareTermsofUse).toHaveTextContaining("Datenschutz");
        await expect(this.tomwareLogin).toBeExisting();
        //await expect(this.tomwareLogin).toHaveTextContaining("Login");
    }

}

export default new FooterPage();
