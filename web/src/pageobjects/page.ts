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
    public get businessMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Dienstleistungen'])[5]");
    }
    public get serviceMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Branchen'])[5]");
    }
    public get contactMenu () {
        return $("(//a[@class='elementor-item'][normalize-space()='Kontakt'])[5]");
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(``)
    }
    public openBusiness (path: string) {
        return browser.url(`https://www.tomware-it.de/branchen/`)
    }
    public openServices (path: string) {
        return browser.url(`https://www.tomware-it.de/dienstleistungen/`)
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
}
