const {VatService, Product} = require('./homework2_1of2')

describe('VatService', () => {
    let vatService
    beforeEach(() => {
        console.log('before each')
        vatService = new VatService()
    });

    let getProductWithPrice = (id, netPrice) => {
        return new Product(id, netPrice)
    }

    test('test_get_gross_price_for_default_vat', () => {
        let product = getProductWithPrice(1, 20.00)
        let result = vatService.getGrossPriceForDefaultVat(product)
        expect(result).toEqual(24.60);
    });

    test('test_get_gross_price', () => {
        let product = getProductWithPrice(1, 10.00)
        const vatValue = 0.08
        let result = vatService.getGrossPrice(product.getNetPrice(), vatValue)
        expect(result).toEqual(10.80);
    });

    test('test_get_gross_price_throws_error', () => {
        let product = getProductWithPrice(1, 10.00)
        const vatValue = 1.08
        function result() {
            vatService.getGrossPrice(product.getNetPrice(), vatValue)
        }
        expect(() => result()).toThrow('valueError');
    });
})














