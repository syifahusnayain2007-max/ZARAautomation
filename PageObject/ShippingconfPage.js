const { test, expect } = require('@playwright/test');

class ShippingconfPage {
    constructor(page) {
        this.page = page
        this.gotopaymentbutton = page.getByRole('button', { name: 'LANJUTKAN' });
        this.deliveryadrressconfirm = page.locator('.delivery-location');
    }
    async OrderDetails() {
        await this.deliveryadrressconfirm.waitFor({ state: 'visible' });
        //await expect(this.deliveryadrressconfirm).toContainText("gg.h naseh no 9c RT006/004");
        await this.gotopaymentbutton.click()
    }
}
module.exports = { ShippingconfPage }