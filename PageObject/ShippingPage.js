const { expect } = require("playwright/test")

class ShippingPage {
    constructor(page) {
        this.page = page

        this.zarastore = page.locator(".delivery-cell", { hasText: "Toko Zara" })
        this.storelocation = page.locator("h4").filter({ hasText: 'PLAZA SENAYAN' })
        this.confirmbutton = page.getByRole('button', { name: 'LANJUTKAN' })
        this.gotopaymentbutton = page.getByRole('button', { name: 'LANJUTKAN' })
        this.deliveryadrressconfirm = page.locator('.delivery-location')
    }
    async ShippingOrderDetails() {
        await this.zarastore.waitFor({ state: 'visible' });
        await this.zarastore.click();
        await this.page.waitForTimeout(4000);
        await this.storelocation.click();
        await this.page.waitForTimeout(4000);
        await this.confirmbutton.click();
        await this.page.waitForTimeout(4000);
    }
    async OrderDetails() {
        await this.deliveryadrressconfirm.waitFor({ state: 'visible' });
        //await expect(this.deliveryadrressconfirm).toContainText("gg.h naseh no 9c RT006/004");
        await this.gotopaymentbutton.click()
    }
}
module.exports = { ShippingPage }