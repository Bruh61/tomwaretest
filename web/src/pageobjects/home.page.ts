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
        return $("//h2[normalize-space()='Entwicklung']");
    }
    public get serviceDevImg () {
        return $(".fab.fa-stack-overflow");
    }
    public get serviceDevBar () {
        return $("div[class='elementor-element elementor-element-3ccd539c envato-kit-200-progress elementor-widget elementor-widget-progress'] span[class='elementor-progress-text']");
    }
    public get serviceDevDescription () {
        return $("//p[contains(text(),'Sowohl Anforderungsanalyse als auch Implementierun')]");
    }
    public get serviceTestmanagementCaption () {
        return $("//h3[normalize-space()='Testmanagement']");
    }
    public get serviceTestmanagementImg () {
        return $(".fas.fa-hammer");
    }
    public get serviceTestmanagementBar () {
        return $("div[class='elementor-element elementor-element-7f7cac81 envato-kit-200-progress elementor-widget elementor-widget-progress'] span[class='elementor-progress-text']");
    }
    public get serviceTestmanagementDescription () {
        return $("//p[contains(text(),'Die Testplanung wird in enger Abstimmung mit der S')]");
    }
    public get serviceManagementCaption () {
        return $("//h3[normalize-space()='Servicemanagement']");
    }
    public get serviceManagementImg () {
        return $(".fas.fa-stethoscope");
    }
    public get serviceManagementBar () {
        return $("div[class='elementor-element elementor-element-a48271d envato-kit-200-progress elementor-widget elementor-widget-progress'] span[class='elementor-progress-text']");
    }
    public get serviceManagementDescription () {
        return $("//p[contains(text(),'Optimierung der Service-Leistungen eines Unternehm')]");
    }
    public get serviceButton () {
        return $("//span[contains(text(),'Dienstleistungen detailliert')]");
    }
    // Leistungen E-Commerce
    public get ecommerceTopCaption () {
        return $("a[role='button'] span[class='elementor-button-text']");
    }
    public get ecommerceCaption () {
        return $("//h2[normalize-space()='E-Commerce']");
    }
    public get ecommerceBarAnalyse () {
        return $("//div[@class='elementor-flip-box__layer__description'][normalize-space()='Sowohl Planung der Unternehmensziele als auch die Analyse der Online Strategie']");
    }
    public get ecommerceBarConcept () {
        return $("//div[@class='elementor-element elementor-element-b953c0c elementor-flip-box--effect-zoom-in elementor-widget elementor-widget-flip-box']//div[@class='elementor-flip-box__layer elementor-flip-box__back']//div[@class='elementor-flip-box__layer__overlay']");
    }
    public get ecommerceBardevelopement () {
        return $("//div[@class='elementor-element elementor-element-f6562ce elementor-flip-box--effect-zoom-in elementor-widget elementor-widget-flip-box']//div[@class='elementor-flip-box__layer elementor-flip-box__back']//div[@class='elementor-flip-box__layer__overlay']");
    }
    public get ecommerceBarImplement () {
        return $("//div[@class='elementor-element elementor-element-81fe309 elementor-flip-box--effect-zoom-in elementor-widget elementor-widget-flip-box']//div[@class='elementor-flip-box__layer elementor-flip-box__back']//div[@class='elementor-flip-box__layer__overlay']");
    }
    public get ecommerceBarSEO () {
        return $("//div[@class='elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bbae884']//div[@class='elementor-flip-box__layer elementor-flip-box__back']//div[@class='elementor-flip-box__layer__inner']//div[1]");
    }
    public get ecommerceBarGoLive () {
        return $("//div[@class='elementor-element elementor-element-3a3f1a7 elementor-flip-box--effect-zoom-in elementor-widget elementor-widget-flip-box']//div[@class='elementor-flip-box__layer elementor-flip-box__back']//div[@class='elementor-flip-box__layer__inner']");
    }
    public get ecommerceBarButton() {
        return $("//span[contains(text(),'Jetzt unverbindlich anfragen')]");
    }
    // Menu
    public get tomwareLogo () {
        return $("(//img[@class='attachment-full size-full wp-image-466'])[3]");
    }
    public get homeMenu () {
        return $("(//a[@class='elementor-item elementor-item-active'][normalize-space()='Home'])[5]");
    }
    public get businessMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Dienstleistungen'])[5]");
    }
    public get serviceMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Branchen'])[5]");
    }
    public get contactMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Kontakt'])[5]");
    }
    // Cookies
    public get cookieCaption () {
        return $("//p[@class='cky-title']");
    }
    public get cookieDescription () {
        return $("div[class='cky-notice-des'] p");
    }
    public get cookieDecline () {
        return $("button[data-cky-tag='reject-button']");
    }
    public get cookieAccept () {
        return $("button[data-cky-tag='accept-button']");
    }
    public get cookieReadmore () {
        return $("a[aria-label='Mehr lesen']");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async assertHomepage(){
        await this.homeCookies();
        await this.assertBody();
        await this.assertHeader();
        await this.homeTitle();
        await this.serviceBar();
    }
    async assertHeader(){
        await expect(this.tomwareLogo).toBeExisting();
        await expect(this.homeMenu).toBeExisting();
        await expect(this.homeMenu).toHaveTextContaining("Home");
        await expect(this.businessMenu).toBeExisting();
        await expect(this.businessMenu).toHaveTextContaining("Dienstleistungen");
        await expect(this.serviceMenu).toBeExisting();
        await expect(this.serviceMenu).toHaveTextContaining("Branchen");
        await expect(this.contactMenu).toBeExisting();
        await expect(this.contactMenu).toHaveTextContaining("Kontakt");
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

        await expect(this.ecommerceTopCaption).toBeExisting();
        await expect(this.ecommerceCaption).toBeExisting();
        await expect(this.ecommerceBarAnalyse).toBeExisting();
        await expect(this.ecommerceBarConcept).toBeExisting();
        await expect(this.ecommerceBardevelopement).toBeExisting();
        await expect(this.ecommerceBarSEO).toBeExisting();
        await expect(this.ecommerceBarGoLive).toBeExisting();
        await expect(this.ecommerceBarButton).toBeExisting();
    }
    async homeTitle(){
        await expect(browser).toHaveTitle("Home • Tomware IT Consulting");
    }
    async serviceBar(){
        await expect(this.serviceDevCaption).toBeExisting();
        await expect(this.serviceDevImg).toBeExisting();
        await expect(this.serviceDevBar).toBeExisting();
        await expect(this.serviceDevDescription).toBeExisting();
        await expect(this.serviceTestmanagementCaption).toBeExisting();
        await expect(this.serviceTestmanagementImg).toBeExisting();
        await expect(this.serviceTestmanagementBar).toBeExisting();
        await expect(this.serviceTestmanagementDescription).toBeExisting();
        await expect(this.serviceManagementCaption).toBeExisting();
        await expect(this.serviceManagementImg).toBeExisting();
        await expect(this.serviceManagementBar).toBeExisting();
        await expect(this.serviceManagementDescription).toBeExisting();
        await expect(this.serviceButton).toBeExisting();
    }
    async homeCookies(){
        await expect(this.cookieCaption).toBeExisting();
        await expect(this.cookieCaption).toHaveTextContaining("Wir schätzen Ihre Privatsphäre");
        await expect(this.cookieDescription).toBeExisting();
        await expect(this.cookieDescription).toHaveTextContaining("Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und unseren Datenverkehr zu analysieren. Indem Sie auf „Akzeptieren“ klicken, stimmen Sie unserer Verwendung von Cookies zu.");
        await expect(this.cookieDecline).toBeExisting();
        await expect(this.cookieDecline).toHaveTextContaining("Ablehnen");
        await expect(this.cookieAccept).toBeExisting();
        await expect(this.cookieAccept).toHaveTextContaining("Akzeptieren");
        await expect(this.cookieReadmore).toBeExisting();
        await this.clickonCookies();
    }
    async clickonCookies(){
        (await this.cookieAccept).waitForDisplayed();
        (await this.cookieAccept).waitForClickable();
        (await this.cookieAccept).click();
    }

    public open () {
        return super.open('');
    }
}

export default new HomePage();
