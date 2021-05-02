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

it('test_get_gross_price', () => {
    let product = new Product(1, 10.00)
    const vatValue = 0.08
    let result = vat.getGrossPrice(product.getNetPrice(), vatValue)
    console.log(result)
    expect(result).toEqual(10.80);
});













