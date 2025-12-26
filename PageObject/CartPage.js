class CartPage {
    constructor(page) {
        this.page = page;
        this.nextbutton = page.getByRole('button', { name: 'LANJUTKAN' });
        this.guestcobutton = page.locator(".continue-as-guest-link");
    }
    async gotoguessCheckout() {
        await this.nextbutton.click();
        await this.guestcobutton.waitFor({ state: 'visible' });
    }
    async guestCheckout() {
        await this.guestcobutton.click()
    }
}

module.exports = { CartPage }