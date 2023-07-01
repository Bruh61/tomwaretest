import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServicePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get servicePageCaption () {
        return $("//h1[normalize-space()='Dienstleistungen']");
    }
    public get servicePageDescription () {
        return $("//p[contains(text(),'Service, die wir für eine Vielzahl von Kunden anbi')]");
    }
    public get servicePageRequest () {
        return $("(//h1[@class='elementor-heading-title elementor-size-default'])[2]");
    }
    public get servicePageRequestButton () {
        return $("//span[contains(text(),'Jetzt anfragen')]");
    }
    public get servicePageDevCaption () {
        return $("//h1[normalize-space()='Entwicklung']");
    }
    public get servicePageDevImg () {
        return $(".fas.fa-laptop-code");
    }
    public get servicePageWebDevCaption () {
        return $("//h1[normalize-space()='Web-Entwicklung']");
    }
    public get servicePageWebDevImg () {
        return $(".attachment-large.size-large.wp-image-1264");
    }
    public get servicePageWebDevDescription () {
        return $("//p[contains(text(),'Unsere Dienstleistungen im Bereich Webdesign und W')]");
    }
    public get servicePageSaasCaption () {
        return $("//h1[normalize-space()='SaaS Solutions']");
    }
    public get servicePageSaasImg () {
        return $(".attachment-large.size-large.wp-image-1265");
    }
    public get servicePageSaasDescription () {
        return $("//p[contains(text(),'Unsere IT Consultings im Bereich SaaS Solutions bi')]");
    }
    public get servicePageEcommerceCaption () {
        return $("//h1[normalize-space()='E-Commerce']");
    }
    public get servicePageEcommercesImg () {
        return $(".attachment-large.size-large.wp-image-1266");
    }
    public get servicePageEcommerceDescription () {
        return $("//p[contains(text(),'Sie sind bei uns an der richtigen Stelle, wenn Sie')]");
    }
    public get servicePageAppCaption () {
        return $("//span[@class='elementor-heading-title elementor-size-default elementor-inline-editing pen']");
    }
    public get servicePageAppImg () {
        return $(".attachment-large.size-large.wp-image-1267");
    }
    public get servicePageAppDescription () {
        return $("//p[contains(text(),'Die Tomware ist darauf spezialisiert, moderne, ans')]");
    }
    public get servicePageTestmanagementpCaption () {
        return $("//h1[normalize-space()='Testmanagment']");
    }
    public get servicePageTestmanagementImg () {
        return $(".fas.fa-file-contract");
    }
    public get servicePageTestmanagementDescription () { //text
        return $(".elementor-element.elementor-element-e08ef92.elementor-widget.elementor-widget-text-editor");
    }
    public get servicePageSupportCaption () {
        return $("//h1[normalize-space()='Support']");
    }
    public get servicePageSupportImg () {
        return $(".fas.fa-headset");
    }
    public get servicePageSupportDescription () { //text
        return $(".elementor-element.elementor-element-ce1fdc3.elementor-widget.elementor-widget-text-editor");
    }
    public get servicePageBottomCaption () {
        return $("//h1[normalize-space()='Haben Sie eine Idee? Lass Sie uns reden!']");
    }
    public get servicePageBottomButton () {
        return $("//span[contains(text(),'Kontaktieren Sie uns')]");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertServicePage(){
        await this.cookies();
        await this.assertTitle();
        await expect(this.servicePageCaption).toBeExisting();
        await expect(this.servicePageDescription).toBeExisting();
        await expect(this.servicePageRequest).toBeExisting();
        await expect(this.servicePageRequestButton).toBeExisting();
        await expect(this.servicePageDevCaption).toBeExisting();
        await expect(this.servicePageDevImg).toBeExisting();
        await expect(this.servicePageWebDevCaption).toBeExisting();
        await expect(this.servicePageWebDevImg).toBeExisting();
        await expect(this.servicePageWebDevDescription).toBeExisting();
        await expect(this.servicePageSaasCaption).toBeExisting();
        await expect(this.servicePageSaasImg).toBeExisting();
        await expect(this.servicePageSaasDescription).toBeExisting();
        await expect(this.servicePageEcommerceCaption).toBeExisting();
        await expect(this.servicePageEcommercesImg).toBeExisting();
        await expect(this.servicePageEcommerceDescription).toBeExisting();
        await expect(this.servicePageAppCaption).toBeExisting();
        await expect(this.servicePageAppImg).toBeExisting();
        await expect(this.servicePageAppDescription).toBeExisting();
        await expect(this.servicePageTestmanagementpCaption).toBeExisting();
        await expect(this.servicePageTestmanagementImg).toBeExisting();
        await expect(this.servicePageTestmanagementDescription).toBeExisting();
        await expect(this.servicePageSupportCaption).toBeExisting();
        await expect(this.servicePageSupportImg).toBeExisting();
        await expect(this.servicePageSupportDescription).toBeExisting();
        await expect(this.servicePageBottomCaption).toBeExisting();
        await expect(this.servicePageBottomButton).toBeExisting();
        //await this.assertHeader();
    }
    async assertTitle(){
        await expect(browser).toHaveTitle("Dienstleistungen • Tomware");
    }
    public open () {
        return super.openService('');
    }

}

export default new ServicePage();
