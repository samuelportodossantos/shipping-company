export default class Truck {

    private _color : string
    private _model : string
    private _licencePlate : string

    constructor(model: string, color: string, licencePlate: string) {
        this._color = color
        this._licencePlate = licencePlate
        this._model = model
        this.validate()
    }

    private validate() {
        if (!this._model) {
            throw new Error('The argument _model is mandatory')
        }
        if (!this._color) {
            throw new Error('The argument _color is mandatory')
        }
        if (!this._licencePlate) {
            throw new Error('The argument _licencePlate is mandatory')
        }
    }

}