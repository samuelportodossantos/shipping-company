import Truck from "./Truck"

describe('Test Truck entity behaviours', () => {

    test(`Test if can't instantiate a truck without _model`, () => {
        expect(() => {
            (new Truck('', 'Blue', 'CMF5547'))
        }).toThrowError('The argument _model is mandatory')
    })

    test(`Test if can't instantiate a truck without _color`, () => {
        expect(() => {
            (new Truck('SCANIA', '', 'CMF5547'))
        }).toThrowError('The argument _color is mandatory')
    })

    test(`Test if can't instantiate a truck without _licencePlate`, () => {
        expect(() => {
            (new Truck('SCANIA', 'Blue', ''))
        }).toThrowError('The argument _licencePlate is mandatory')
    })

})