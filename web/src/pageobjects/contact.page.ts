import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get contactPageCaption () {
        return $("h2[class='elementor-heading-title elementor-size-default']");
    }
    public get contactPageHeaderImg () {
        return $("(//div[@class='elementor-spacer-inner'])[1]");
    }
    public get contactEmailCaption () {
        return $("//h3[normalize-space()='E-Mail']");
    }
    public get contactEmail () {
        return $("//h3[normalize-space()='info@tomware-it.de']");
    }
    public get contactEmailDescription () {
        return $("//h3[normalize-space()='Lassen Sie uns in Kontakt treten']");
    }
    public get contactOfficeCaption () {
        return $("//h3[normalize-space()='Office']");
    }
    public get contactOfficeTelefon () {
        return $("//h3[normalize-space()='030 652 124 806']");
    }
    public get contactOfficeDescription () {
        return $("//h3[normalize-space()='Mon - Fr, 7 - 20 Uhr']");
    }
    public get contactBarCaption () {
        return $("//h1[normalize-space()='Kontakt']");
    }
    public get contactBarDesciption1 () {
        return $("//h3[normalize-space()='Head Office']");
    }
    public get contactBarDesciption2 () {
        return $("//p[normalize-space()='info@tomware-it.de']");
    }
    public get contactField () {
        return $("(//div[@class='elementor-widget-container'])[23]");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertContactPage(){
        await expect(this.contactPageCaption).toBeExisting();
        await expect(this.contactPageCaption).toHaveTextContaining("Interesse an einer Zusammenarbeit?");
        await expect(this.contactPageHeaderImg).toBeExisting();
        await expect(this.contactEmailCaption).toBeExisting();
        await expect(this.contactEmail).toBeExisting();
        await expect(this.contactEmailDescription).toBeExisting();
        await expect(this.contactOfficeCaption).toBeExisting();
        await expect(this.contactOfficeTelefon).toBeExisting();
        await expect(this.contactOfficeDescription).toBeExisting();
        await expect(this.contactBarCaption).toBeExisting();
        await expect(this.contactBarDesciption1).toBeExisting();
        await expect(this.contactBarDesciption2).toBeExisting();
        await expect(this.contactField).toBeExisting();
        //await this.assertHeader();
    }
    public open () {
        return super.openContact('');
    }

}

export default new ContactPage();
