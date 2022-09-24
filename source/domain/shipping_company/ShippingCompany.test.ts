import ShippingCompany from "./ShippingCompany"

describe('Test ShippingCompany behaviours', () => {

    test('Testing if cant instantiate with invalid name', () => {
        expect(() => {
            ( new ShippingCompany("", 14310686000121))
        }).toThrowError("Name field need to be seted and can't have more than 100 characters")
    })

    test('Testing if cant instantiate with invalid cnpj', () => {
        expect(() => {
            ( new ShippingCompany("ShippingCompany", 123))
        }).toThrowError(`CNPJ must have fourteen characters`)
    })

    test('Testing if when created the company status returns 1', () => {
        const Company = new ShippingCompany("ShippingCompany", 14310686000121)
        expect(Company.status).toBe(1)
    })

    test('Testing if when disabled, the compaty status returns 0', () => {
        const Company = new ShippingCompany("ShippingCompany", 14310686000121)
        Company.disable()
        expect(Company.status).toBe(0)
    })

    test('Testing if when enable, the compaty status returns 1', () => {
        const Company = new ShippingCompany("ShippingCompany", 14310686000121)
        Company.disable()
        Company.enable()
        expect(Company.status).toBe(1)
    })

})