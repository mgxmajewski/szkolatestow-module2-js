// class VatService {
//     double vatValue;
//
//     public VatService() {
//         this.vatValue = 0.23;
//     }
//
//     public double getGrossPriceForDefaultVat(Product product){
//
//     return getGrossPrice(product.getNetPrice(), vatValue);
// }
//
// public double getGrossPrice(double netPrice, double vatValue){
//     if(vatValue > 1){
//         throw Exception
//     }
//
//     return netPrice * (1 + vatValue)));
// }
// }
//
// class Product {
//     string id;
//     double netPrice;
// }

class VatService{
    constructor(vatValue) {
        this.vatValue = vatValue
    }

    getGrossPriceForDefaultVat(product){
        return this.getGrossPrice(product.getNetPrice(), this.vatValue);
    }

    getGrossPrice(netPrice, vatValue){
        if(vatValue > 1){
            throw new Error
        }
        return netPrice * (1 + vatValue);
    }
}

class Product {
    constructor(id, netPrice){
        this.id = id
        this.netPrice = netPrice
    }

    get getNetPrice(){
        return this.netPrice
    }
}
