class OrderPage
{
    constructor(page)
    {
        this.page = page
        this.inputfirstname = page.getByLabel(/^Nama$/i);
        this.inputlastname = page.getByLabel(/^Nama keluarga$/i);
        this.inputaddress = page.getByLabel("Alamat");
        this.selectcity = page.getByLabel("Provinsi");
        this.selectdistrict = page.getByLabel("Kota/Kabupaten");
        this.selectsubdistrict = page.getByLabel("Kelurahan");
        this.inputpostcode = page.getByLabel("Kode Pos");
        this.inputemail = page.getByLabel(/^Email$/i);
        this.inputphonenumber = page.getByLabel("Telepon");
        this.newsletterconfirmation = page.locator(".form-input-checkbox");
        this.navigatetoshipping = page.getByRole('button', { name: 'LANJUTKAN' })
    }
 async inputshippingInformation()
 {
    await this.page.getByLabel(/^Nama$/i).waitFor({state:'visible'});
   
    await this.inputfirstname.pressSequentially("muhammad", {delay:150});
    await this.page.waitForTimeout(2000);
    await this.inputlastname.pressSequentially("syifa",{delay:150});
    await this.page.waitForTimeout(2000);
    await this.inputaddress.pressSequentially("gg.h naseh no 9c RT006/004",{delay:150});
    await this.page.waitForTimeout(2000);
    await this.selectcity.selectOption("DKI Jakarta");
    await this.page.waitForTimeout(2000);
    await this.selectdistrict.selectOption("Jakarta Selatan");
    await this.page.waitForTimeout(2000);
    await this.selectsubdistrict.selectOption("Lenteng Agung");
    await this.page.waitForTimeout(2000);
    await this.inputpostcode.pressSequentially("12630",{delay:150});
    await this.page.waitForTimeout(2000);
    await this.inputemail.pressSequentially("iddota1997@gmail.com",{delay:150});
    await this.page.waitForTimeout(2000);
    await this.inputphonenumber.pressSequentially("83898953515", {delay:150});
    await this.page.waitForTimeout(2000);
    await this.newsletterconfirmation.click();
    await this.page.waitForTimeout(8000);
    await this.navigatetoshipping.click();

 }
}
module.exports = {OrderPage}