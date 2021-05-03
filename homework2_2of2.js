const {VatProvider} = require('./VatProvider')

class VatService{
    constructor(VatProvider) {
        this.VatProvider = VatProvider.getDefaultVat()
    }

    getGrossPriceForDefaultVat(product){
        return this.getGrossPrice(product.getNetPrice(), this.VatProvider);
    }

    getGrossPrice(netPrice, vatValue){
        let result
        if(vatValue > 1){
            throw new Error('valueError - exceed one')
        } else if (typeof vatValue == "string"){
            throw new Error('typeError - string')
        } else if (vatValue < 0) {
            throw new Error('valueError - negative')
        }
        result = netPrice * (1 + vatValue)
        result.toPrecision(5)
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

module.exports = {VatService, Product}

