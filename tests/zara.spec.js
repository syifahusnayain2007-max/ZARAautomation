const { test, expect } = require('@playwright/test');

test.only("zara guest checkout Validation", async ({browser}) => {
  

    const context = await browser.newContext({
    permissions: []  // skip popup minta lokasi
    });
    const page = await context.newPage();
    await page.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', {
    get: () => false,
  });
});
    await page.goto("https://www.zara.com/id/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);
    
    //page.getByRole('button',{name:'Buka menu'}).waitFor()
   
    //bukamenu ke polo
    await page.getByRole('button', { name: 'Buka menu' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('tab', { name: 'pria' }).first().click();

    await page.getByRole('link', { name: 'POLO' }).click();
    //await page.locator('li[data-categoryid="2432056"]').click(); 
    //await page.locator("a[href*='2432049']").click();
    

  

    const produk2ndcolumnRow1 = page.locator('.product-grid-product--2th-column').nth(1)
    await produk2ndcolumnRow1.getByLabel('Tambahkan ke keranjang').click();
    await page.waitForTimeout(2000);
    const sizeL = page.getByRole('button', { name: /^L$/i });
    //const sizeProduct = page.locator('.size-selector-sizes').filter({ has: page.getByRole('button', { name:/^L$/i}) })
    await sizeL.click();
    
    await page.getByText('Ditambahkan ke keranjang Anda').waitFor();   
    
    await page.getByRole('button', { name: 'Lihat tas belanja' }).click();
    await page.waitForTimeout(2000);
    //await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'LANJUTKAN' }).click();
    //await page.waitForLoadState('networkidle');
    await page.waitForTimeout(10000);
    //guest checkout
    await page.locator(".continue-as-guest-link").click();
    //await page.waitForLoadState('networkidle');
    page.getByLabel(/^Nama$/i).waitFor();
    //isi data diri
    await page.getByLabel(/^Nama$/i).pressSequentially("muhammad", {delay:150});
    await page.waitForTimeout(2000);
    await page.getByLabel(/^Nama keluarga$/i).pressSequentially("syifa",{delay:150});
    await page.waitForTimeout(2000);
    await page.getByLabel("Alamat").pressSequentially("gg.h naseh no 9c RT006/004",{delay:150});
    await page.waitForTimeout(2000);
    await page.getByLabel("Provinsi").selectOption("DKI Jakarta");
    await page.waitForTimeout(2000);
    await page.getByLabel("Kota/Kabupaten").selectOption("Jakarta Selatan");
    await page.waitForTimeout(2000);
    await page.getByLabel("Kelurahan").selectOption("Lenteng Agung");
    await page.waitForTimeout(2000);
    await page.getByLabel("Kode Pos").pressSequentially("12630",{delay:150});
    await page.waitForTimeout(2000);
    await page.getByLabel(/^Email$/i).pressSequentially("iddota1997@gmail.com",{delay:150});
    await page.waitForTimeout(2000);
    await page.getByLabel("Telepon").pressSequentially("83898953515", {delay:150});
    await page.waitForTimeout(2000);
    await page.locator(".form-input-checkbox").click();
    await page.waitForTimeout(8000);
    await page.getByRole('button', { name: 'LANJUTKAN' }).click();
    //await page.waitForLoadState('networkidle');
    //await expect(page.locator(".delivery-cell-address-button")).toHaveText("Gg. H. Naseh")
    
    //isi alamat pengiriman
    await page.locator(".delivery-cell", {hasText:"Toko Zara"}).click();
    await page.waitForTimeout(4000);
   //await page.waitForLoadState('networkidle');
    await page.locator("h4").filter({ hasText: 'PONDOK INDAH MALL 2' }).click();
    await page.waitForTimeout(4000);
   //await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'LANJUTKAN' }).click();
    await page.waitForTimeout(4000);
   //await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'LANJUTKAN' }).waitFor({ state: 'visible' });
    await page.getByRole('button', { name: 'LANJUTKAN' }).click();
   //await page.waitForLoadState('networkidle');
    
    //pembayaran
    await page.locator(".payment-methods__item", {hasText:'Bank Transfer/Virtual Account'}).click()
    await page.getByRole('button', { name: 'OTORISASI PEMBAYARAN' }).click();
})