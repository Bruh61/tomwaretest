import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BusinessPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get businessePageCaption () {
        return $("//h2[normalize-space()='Branchen']");
    }
    public get businessePageCaptionDescription () {
        return $("//div[@class='elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ca51f80']//p[1]");
    }
    public get businesseBarVersicherung () {
        return $("//h3[normalize-space()='Versicherung']");
    }
    public get businesseBarVersicherungImg () {
        return $(".attachment-full.size-full.wp-image-455");
    }
    public get businesseBarVersicherungDescription () {
        return $("//p[contains(text(),'Versicherer kämpfen mit zahlreichen Herausforderun')]");
    }
    public get businesseBarBanken () {
        return $("//h3[normalize-space()='Banken']");
    }
    public get businesseBarBankenImg () {
        return $("img[title='undraw_online_resume_qyys.png']");
    }
    public get businesseBarBankenDescription () {
        return $("//p[contains(text(),'Die digitale Transformation stellt Banken vor schw')]");
    }
    public get businesseBarTelekommunikation () {
        return $("//h3[normalize-space()='Telekommunikation']");
    }
    public get businesseBarTelekommunikationImg () {
        return $(".attachment-full.size-full.wp-image-457");
    }
    public get businesseBarTelekommunikationDescription () {
        return $("//p[contains(text(),'Nie waren die Erwartungen an die Telekommunikation')]");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertBusinessPage(){
        await this.cookies();
        await this.assertTitle();
        await expect(this.businessePageCaption).toBeExisting();
        await expect(this.businessePageCaptionDescription).toBeExisting();
        await expect(this.businesseBarVersicherung).toBeExisting();
        await expect(this.businesseBarVersicherungImg).toBeExisting();
        await expect(this.businesseBarVersicherungDescription).toBeExisting();
        await expect(this.businesseBarBanken).toBeExisting();
        await expect(this.businesseBarBankenImg).toBeExisting();
        await expect(this.businesseBarBankenDescription).toBeExisting();
        await expect(this.businesseBarTelekommunikation).toBeExisting();
        await expect(this.businesseBarTelekommunikationImg).toBeExisting();
        await expect(this.businesseBarTelekommunikationDescription).toBeExisting();
        //await this.assertHeader();
    }
    async assertTitle(){
        await expect(browser).toHaveTitle("Branchen • Tomware");
    }
    public open () {
        return super.openBusiness('');
    }

}

export default new BusinessPage();
