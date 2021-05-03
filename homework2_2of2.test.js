const {VatService, Product} = require('./homework2_2of2')
const {VatProvider} = require('./VatProvider')

describe('VatService with "interface"', () => {

    let vatService
    let vatProvider
    beforeEach(() => {
        vatProvider = new VatProvider()
        vatService = new VatService(vatProvider)
    });

    let getProductWithPrice = (id, netPrice, productType) => {
        return new Product(id, netPrice, productType)
    }

    test('should get gross price for default vat', () => {
        let product = getProductWithPrice(1, 20.00, 'book')
        const vatValue = jest.spyOn(VatProvider.prototype, 'getDefaultVat').mockReturnValue(0.23);
        let result = vatService.getGrossPriceForDefaultVat(product)
        expect(vatValue).toHaveBeenCalled();
        expect(result).toEqual(24.60);
    });

    test('should calculateGrossPrice', () => {
        let product = getProductWithPrice(1, 10.00, 'burger')
        const vatValue = 0.08
        let result = vatService.calculateGrossPrice(product.getNetPrice(), vatValue)
        expect(result).toBeCloseTo(10.80,5);
    });

    test('should get gross price with vat for type of product', () => {
        let product = getProductWithPrice(1, 10.00, 'beer')
        const vatValue = jest.spyOn(VatProvider.prototype, 'getVatForType').mockReturnValue(0.12);
        let result = vatService.getGrossPriceForType(product.getNetPrice(), 'beer');
        expect(vatValue).toHaveBeenCalled();
        expect(result).toBeCloseTo(11.2,5);

    });

    test('should throw error on vat exceeding 1', () => {
        let product = getProductWithPrice(1, 10.00, 'pizza')
        const vatValue = jest.spyOn(VatProvider.prototype, 'getVatForType').mockReturnValue(1.08)
        function result() {
            vatService.getGrossPriceForType(product.getNetPrice(), vatValue)
        }
        expect(() => result()).toThrow('valueError - exceed one');
    });
})














