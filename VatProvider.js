class VatProvider {

    getDefaultVat(){
        return 0.1
    }

    getVatForType(productType){
        return 0.5
    }
}

module.exports = {VatProvider}
