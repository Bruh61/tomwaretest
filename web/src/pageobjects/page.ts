/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /*
     * Definitons
    */
    // Menu
    public get tomwareLogo () {
        return $("(//img[@class='attachment-full size-full wp-image-466'])[3]");
    }
    public get homeMenu () {
        return $("(//a[@class='elementor-item elementor-item-active'][normalize-space()='Home'])[5]");
    }
    public get notHomeMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Home'])[5]");
    }
    public get businessMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Dienstleistungen'])[5]");
    }
    public get notBusinessMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Branchen'])[5]");
    }
    public get serviceMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Branchen'])[5]");
    }
    public get notServiceMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Dienstleistungen'])[5]");
    }
    public get contactMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Kontakt'])[5]");
    }
    public get notContactMenu () {
        return $("");
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
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://www.tomware-it.de/`)
    }
    public openService (path: string) {
        return browser.url(`https://www.tomware-it.de/dienstleistungen/`)
    }
    public openBusiness (path: string) {
        return browser.url(`https://www.tomware-it.de/branchen/`)
    }
    public openContact (path: string) {
        return browser.url(`https://www.tomware-it.de/kontakt/`)
    }
    public async closeNewTab(): Promise<void>{
        const handles = await browser.getWindowHandles();
        if(handles.length > 1){
            await browser.switchToWindow(handles[1]);
            await browser.closeWindow();
            await browser.switchToWindow(handles[0]);
        }
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
    async assertHeaderNotHome(){
        await expect(this.tomwareLogo).toBeExisting();
        await expect(this.notHomeMenu).toBeExisting();
        await expect(this.notHomeMenu).toHaveTextContaining("Home");
        await expect(this.notBusinessMenu).toBeExisting();
        await expect(this.notBusinessMenu).toHaveTextContaining("Dienstleistungen");
        await expect(this.notServiceMenu).toBeExisting();
        await expect(this.notServiceMenu).toHaveTextContaining("Branchen");
        await expect(this.contactMenu).toBeExisting();
        await expect(this.contactMenu).toHaveTextContaining("Kontakt");
    }
    async cookies(){
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
}
