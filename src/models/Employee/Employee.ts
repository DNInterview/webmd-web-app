import IEmployee from "./IEmployee";

export default class Employee implements IEmployee {
  constructor(
    readonly city: string,
    readonly country: string,
    readonly employmentEndDate: Date,
    readonly firstName: string,
    readonly hireDate: Date,
    readonly id: string,
    readonly lastName: string,
    readonly phoneNumber: string,
    readonly state: string
  ) {}
}
