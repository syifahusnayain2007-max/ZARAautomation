const {DashboardPage} = require('../PageObject/DashboardPage');
const {CartPage} = require('../PageObject/CartPage');
const {OrderPage} = require('../PageObject/OrderPage');
const {ShippingPage} = require('../PageObject/ShippingPage');
const {ShippingconfPage} = require('../PageObject/ShippingconfPage');
class POManager
{
    constructor(page)
    {
    this.page = page
    this.dashboardPage = new DashboardPage (this.page);
    this.cartPage = new CartPage(this.page);
    this.orderPage = new OrderPage(this.page);
    this.shippingPage= new ShippingPage(this.page);
    this.shippingconfPage = new ShippingconfPage(this.page)
    }
getDashboardpage()
{
    return this.dashboardPage;
}

getCartpage()
{
    return this.cartPage;
}
getOrderpage ()
{
    return this.orderPage;
}
getShippingpage()
{
    return this.shippingPage;
}
getShippingconfpage ()
{
    return this.shippingconfPage;
}
}
module.exports={POManager}