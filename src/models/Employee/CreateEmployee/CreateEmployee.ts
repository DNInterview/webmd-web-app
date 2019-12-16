import ICreateEmployee from "@/models/Employee/CreateEmployee/ICreateEmployee";

export default class CreateEmployee implements ICreateEmployee {
  constructor(
    readonly city: string,
    readonly country: string,
    readonly employmentEndDate: Date,
    readonly firstName: string,
    readonly hireDate: Date,
    readonly lastName: string,
    readonly phoneNumber: string,
    readonly state: string
  ) {}
}
