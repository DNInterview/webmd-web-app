import IEmployee from "@/modules/employees/models/Employee/IEmployee";

export default class Employee implements IEmployee {
  readonly _typename: string = "Employee";
  constructor(
    readonly id: string,
    readonly firstName: string | null,
    readonly lastName: string | null,
    readonly phoneNumber: string | null,
    readonly city: string | null,
    readonly state: string | null,
    readonly country: string | null,
    readonly hireDate: string | null,
    readonly employmentEndDate: string | null
  ) {}
}
