export default class ShippingCompany {

    private ENABLED = 1
    private DISABLED = 0
    private NAME_CHARACTERS_LIMIT = 100

    private _name : string
    private _cnpj : number
    private _status : number = this.ENABLED
    
    constructor( name : string, cnpj : number ){
        this._name = name
        this._cnpj = cnpj
        this.validate()
    }

    get status() : number {
        return this._status
    }

    public disable() {
        this._status = this.DISABLED
    }

    public enable() {
        this._status = this.ENABLED
    }

    private validate(){
        if (this._name === "" || this._name.length > this.NAME_CHARACTERS_LIMIT) {
            throw new Error(`Name field need to be seted and can't have more than ${this.NAME_CHARACTERS_LIMIT} characters`)
        }
        if (`${this._cnpj}`.length !== 14) {
            throw new Error(`CNPJ must have fourteen characters`)
        }
    }
    
}