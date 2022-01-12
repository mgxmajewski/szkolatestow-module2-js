class VatService{
    constructor(vatValue=0.23) {
        this.vatValue = vatValue
    }

    get getDefaultVatValue(){
        return this.vatValue
    }

    set setDefaultVatValue(newVatValue){
        this.vatValue = newVatValue
    }

    getGrossPriceForDefaultVat(product){
        return this.getGrossPrice(product.getNetPrice(), this.vatValue);
    }

    getGrossPrice(netPrice, vatValue){
        if(vatValue > 1){
            throw new Error('valueError - exceed one');
        }
        return netPrice * (1 + vatValue);
    }
}

class Product {
    constructor(id, netPrice){
        this.id = id
        this.netPrice = netPrice
    }

    getNetPrice(){
        return this.netPrice
    }
}

module.exports = {VatService, Product}

