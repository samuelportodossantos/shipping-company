import { Driver } from "./Driver"

describe('Tests to validate Driver behaviours', () => {

    test('Test if can instantiate a Driver without name', () => {
        expect(()=>{
            ( new Driver('', 26114921151, new Date('1991-12-17')))
        }).toThrowError('The argument _name is mandatory')
    })

    test('Test if can instantiate a Driver with invalid cpf length', () => {
        expect(()=>{
            ( new Driver('Samuel', 123, new Date('1991-12-17')))
        }).toThrowError('The argument _cpf must be have 11 characters')
    })

    test('Test if when seted email, it is a valid email', () => {
        const DriverGuy = new Driver('Samuel', 26114921151, new Date('1991-12-17'))
        DriverGuy.email = 'samuelporto@email.com'
        expect(DriverGuy.email).toBeDefined()
    })

})