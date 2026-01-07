import { chromium, test, expect } from '@playwright/test';
import { POManager } from '../PageObject/POManager.js';
test ("zara guest E2E checkout ", async ({page}) => {
    //dasboardpage go to POLO
    const poManager = new POManager(page)
    const dasboardPage = poManager.getDashboardpage();
    const cartPage = poManager.getCartpage();
    const orderPage = poManager.getOrderpage();
    const shippingPage=poManager.getShippingpage();
    const shippingconfPage=poManager.getShippingconfpage()

    await dasboardPage.goTO();
    await dasboardPage.navigatetoPOLOProducts();
    await dasboardPage.getPoloProducts1strowcol2();
    await dasboardPage.addtocartPopup();

    await cartPage.gotoguessCheckout();
    await cartPage.guestCheckout();

    await orderPage.inputshippingInformation();
    await shippingPage.ShippingOrderDetails();
    await shippingconfPage.OrderDetails();
    



    
    
   
    
    //pembayaran
    await page.locator(".payment-methods__item", {hasText:'Bank Transfer/Virtual Account'}).waitFor({state:'visible'});
    await page.locator(".payment-methods__item", {hasText:'Bank Transfer/Virtual Account'}).click()
    await page.getByRole('button', { name: 'OTORISASI PEMBAYARAN' }).click();
})
