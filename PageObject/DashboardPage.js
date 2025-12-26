class DashboardPage {
    constructor(page) {
        this.page = page
        this.openmenudropdown = page.getByRole('button', { name: 'Buka menu' });
        this.menproducts = page.getByRole('tab', { name: 'pria' }).first();
        this.poloproducts = page.getByRole('link', { name: 'POLO' });
        this.produk2ndcolumnRow1 = page.locator('.product-grid-product--2th-column').nth(1)
        this.addtocartproduct = this.produk2ndcolumnRow1.getByLabel('Tambahkan ke keranjang');
        this.sizeproduct = page.getByRole('button', { name: /^L$/i });
        this.popupcart = page.getByText('Ditambahkan ke keranjang Anda');
        this.gotocartpage = page.getByRole('button', { name: 'Lihat tas belanja' });
    }
    async goTO() {
        await this.page.goto("https://www.zara.com/id/", { waitUntil: "domcontentloaded" });
        await this.page.waitForTimeout(2000);
    }
    async navigatetoPOLOProducts() {
        await this.openmenudropdown.waitFor({ state: 'visible' });

        await this.openmenudropdown.click();
        await this.page.waitForTimeout(2000);
        await this.menproducts.click();
        await this.poloproducts.click();
    }
    async getPoloProducts1strowcol2() {
        await this.addtocartproduct.click(),
            await this.sizeproduct.waitFor({ state: 'visible' });
        await this.sizeproduct.click();
    }
    async addtocartPopup() {
        await this.popupcart.waitFor({ state: 'visible' });
        await this.gotocartpage.click();
        await this.page.waitForTimeout(2000);
    }
}
module.exports = { DashboardPage }