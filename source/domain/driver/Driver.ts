export class Driver {

    private _name : string
    private _cpf : number
    private _birthdate : Date
    private _email!: string

    constructor(name : string, cpf: number, birthdate: Date) {
        this._name = name
        this._birthdate = birthdate
        this._cpf = cpf
        this.validate()
    }

    set email(email: string) {
        this._email = email
    }

    get email():string {
        return this._email
    }

    private validate() {
        if (!this._name) {
            throw new Error('The argument _name is mandatory')
        }
        if (`${this._cpf}`.length !== 11) {
            throw new Error('The argument _cpf must be have 11 characters')
        }
    }

}