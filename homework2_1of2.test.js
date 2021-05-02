const {VatService, Product} = require('./homework2_1of2')

 // beforeEach(() => {
 //     // Prepares vatService
 //
 //     const vat = new VatService
 //     return vat
 // });
let vat = new VatService

it('test_get_gross_price_for_default_vat', () => {
    let product = new Product(1, 20.00)
    let result = vat.getGrossPriceForDefaultVat(product)
    expect(result).toEqual(24.60);
});













