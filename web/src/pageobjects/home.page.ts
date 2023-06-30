import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get homeCaption1 () {
        return $("div[class='elementor-element elementor-element-73314ae elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']");
    }
    public get homeCaption2 () {
        return $("div[class='elementor-element elementor-element-0adf697 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']");
    }
    public get homeCaption3 () {
        return $("div[class='elementor-element elementor-element-d4b568c elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']");
    }
    public get contactButtonCaption () {
        return $("div[class='elementor-element elementor-element-09ba54d elementor-align-center elementor-widget elementor-widget-button'] span[class='elementor-button-text']");
    }
    public get aboveCaptionITConsulting () {
        return $("span[class='elementor-heading-title elementor-size-default']");
    }
    public get captionITConsulting () {
        return $("div[class='elementor-element elementor-element-173bee07 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']");
    }
    public get desciptionITConsulting () {
        return $("div[class='elementor-element elementor-element-3dafd06a elementor-widget elementor-widget-heading'] h3[class='elementor-heading-title elementor-size-default']");
    }
    // Service Bar
    public get serviceDevCaption () {
        return $("div[class='elementor-element elementor-element-6b08eb81 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']");
    }
    public get serviceDevImg () {
        return $(".fab.fa-stack-overflow");
    }
    public get serviceDevBar () {
        return $("div[class='elementor-element elementor-element-3ccd539c envato-kit-200-progress elementor-widget elementor-widget-progress'] span[class='elementor-progress-text']");
    }
    public get serviceDevDescription () {
        return $("div[class='elementor-element elementor-element-38782bd0 elementor-widget elementor-widget-text-editor'] p");
    }
    public get serviceTestmanagementCaption () {
        return $("div[class='elementor-element elementor-element-7a9136d3 elementor-widget elementor-widget-heading'] h3[class='elementor-heading-title elementor-size-default']");
    }
    public get serviceTestmanagementImg () {
        return $(".fas.fa-hammer");
    }
    public get serviceTestmanagementBar () {
        return $("div[class='elementor-element elementor-element-7f7cac81 envato-kit-200-progress elementor-widget elementor-widget-progress'] span[class='elementor-progress-text']");
    }
    public get serviceTestmanagementDescription () {
        return $("div[class='elementor-element elementor-element-4e1e8fda elementor-widget elementor-widget-text-editor'] p");
    }
    public get serviceManagementCaption () {
        return $("div[class='elementor-element elementor-element-7ccee1e5 elementor-widget elementor-widget-heading'] h3[class='elementor-heading-title elementor-size-default']");
    }
    public get serviceManagementImg () {
        return $(".fas.fa-stethoscope");
    }
    public get serviceManagementBar () {
        return $("div[class='elementor-element elementor-element-a48271d envato-kit-200-progress elementor-widget elementor-widget-progress'] span[class='elementor-progress-text']");
    }
    public get serviceManagementDescription () {
        return $("div[class='elementor-element elementor-element-16c9b5bb elementor-widget elementor-widget-text-editor'] p");
    }
    public get serviceButton () {
        return $("body > div:nth-child(15) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(2)");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertHomepage(){
        await this.assertBody();
        await this.assertHeader();
        await this.homeTitle();
        await this.serviceBar();
    }
    async assertHeader(){
        
    }
    async assertBody(){
        await expect(this.homeCaption1).toBeExisting();
        await expect(this.homeCaption1).toHaveTextContaining("Start.");
        await expect(this.homeCaption2).toBeExisting();
        await expect(this.homeCaption2).toHaveTextContaining("Innovation.");
        await expect(this.homeCaption3).toBeExisting();
        await expect(this.homeCaption3).toHaveTextContaining("Erfolg.");
        await expect(this.contactButtonCaption).toBeExisting();
        await expect(this.contactButtonCaption).toHaveTextContaining("Jetzt kontaktieren");
        await expect(this.aboveCaptionITConsulting).toBeExisting();
        await expect(this.aboveCaptionITConsulting).toHaveTextContaining("Start Growing Your Business");
        await expect(this.captionITConsulting).toBeExisting();
        await expect(this.captionITConsulting).toHaveTextContaining("IT Consulting");
        await expect(this.desciptionITConsulting).toBeExisting();
        await expect(this.desciptionITConsulting).toHaveTextContaining("Wir unterstützen Sie von der" + "\nEntwicklung über die Testung bis hin zum Service von Ihrem Produkt.");
        
    }
    async homeTitle(){
        await expect(browser).toHaveTitle("Home • Tomware IT Consulting");
    }
    async serviceBar(){
        await expect(this.serviceDevCaption).toBeExisting();
        //await expect(this.serviceDevCaption).toHaveTextContaining("Entwicklung");
        await expect(this.serviceDevImg).toBeExisting();
        await expect(this.serviceDevBar).toBeExisting();
        await expect(this.serviceDevDescription).toBeExisting();
        //await expect(this.serviceDevDescription).toHaveTextContaining("Sowohl Anforderungsanalyse als auch Implementierung der Anforderung realisiert unser Softwareentwicklungsteam.");

        await expect(this.serviceTestmanagementCaption).toBeExisting();
        //await expect(this.serviceTestmanagementCaption).toHaveTextContaining("Testmanagement");
        await expect(this.serviceTestmanagementImg).toBeExisting();
        await expect(this.serviceTestmanagementBar).toBeExisting();
        await expect(this.serviceTestmanagementDescription).toBeExisting();
        //await expect(this.serviceTestmanagementDescription).toHaveTextContaining("Die Testplanung wird in enger Abstimmung mit der Softwareentwicklung und den Mitarbeitern des Testteams erfolgen. Die Testplanung erfolgt dabei auf unterschiedlichen Ebenen.");

        await expect(this.serviceManagementCaption).toBeExisting();
        //await expect(this.serviceManagementCaption).toHaveTextContaining("Servicemanagement");
        await expect(this.serviceManagementImg).toBeExisting();
        await expect(this.serviceManagementBar).toBeExisting();
        await expect(this.serviceManagementDescription).toBeExisting();
        //await expect(this.serviceManagementDescription).toHaveTextContaining("Optimierung der Service-Leistungen eines Unternehmens. Stichwort: Effizienz und maximale Kundenzufriedenheit.");
        
        await expect(this.serviceButton).toBeExisting();
        //await expect(this.serviceButton).toHaveTextContaining("Dienstleistungen detailliert");
    }
    public open () {
        return super.open('');
    }
}

export default new HomePage();
