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

    /**
     * overwrite specific options to adapt it to page object
     */
    async assertServicePage(){
        await expect(this.servicePageCaption).toBeExisting();
        //await this.assertHeader();
    }
    public open () {
        return super.openService('');
    }

}

export default new ServicePage();
