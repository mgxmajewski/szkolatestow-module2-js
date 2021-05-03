class VatService{
    constructor(VatProvider) {
        this.VatProvider = VatProvider
    }

    getGrossPriceForDefaultVat(product){
        return this.calculateGrossPrice(product.getNetPrice(), this.VatProvider.getDefaultVat());
    }

    getGrossPriceForType(netPrice, productType){
        const vatValue = this.VatProvider.getVatForType(productType)
        return this.calculateGrossPrice(netPrice, vatValue)
    }

    calculateGrossPrice(netPrice, vatValue){
        let result
        if(vatValue > 1){
            throw new Error('valueError - exceed one')
        } else if (typeof vatValue == "string"){
            throw new Error('typeError - string')
        } else if (vatValue < 0) {
            throw new Error('valueError - negative')
        }
        result = parseFloat((netPrice * (1 + vatValue)).toPrecision(5))
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

