import IEmployee from "./IEmployee";

export default class Employee implements IEmployee {
  constructor(
    readonly id: string,
    readonly firstName?: string,
    readonly lastName?: string,
    readonly city?: string,
    readonly state?: string,
    readonly country?: string,
    readonly phoneNumber?: string,
    readonly employmentEndDate?: Date,
    readonly hireDate?: Date
  ) {}
}
