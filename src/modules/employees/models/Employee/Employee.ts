import IEmployee from "./IEmployee";
import IEmployeeJson from "@/modules/employees/services/EmployeeService/IEmployeeJson";
import ISerializable from "@/modules/core/models/interfaces/ISerializable";

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
