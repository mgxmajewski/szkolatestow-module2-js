const {VatProvider} = require('./VatProvider')

class VatService{
    constructor(VatProvider) {
        this.VatProvider = VatProvider
    }

    getGrossPriceForDefaultVat(product){
        return this.calculateGrossPrice(product.getNetPrice(), this.VatProvider.getDefaultVat());
    }

    getGrossPriceForType(netPrice, productType){
        const vatValue = this.VatProvider.getVatForType(productType)
        console.log('netPrice' + netPrice)
        return this.calculateGrossPrice(netPrice, vatValue)
    }

    calculateGrossPrice(netPrice, vatValue){
        let result
        console.log(vatValue)
        if(vatValue > 1){
            throw new Error('valueError - exceed one')
        } else if (typeof vatValue == "string"){
            throw new Error('typeError - string')
        } else if (vatValue < 0) {
            throw new Error('valueError - negative')
        }
        result = parseFloat((netPrice * (1 + vatValue)).toPrecision(5))
        console.log(result)
        return result
    }
}

class Product {
    constructor(id, netPrice, productType){
        this.id = id
        this.netPrice = netPrice
        this.productType = productType
    }

    getNetPrice(){
        return this.netPrice
    }

    getProductType(){
        return this.productType
    }
}

let product = new Product(1, 10.00, 'burger')
let vatService = new VatService(VatProvider)
const vatValue = 0.08
console.log(vatService.calculateGrossPrice(product.getNetPrice(), vatValue))

module.exports = {VatService, Product}

