import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import IEmployeeAttributes from "@/modules/employees/models/Employee/IEmployeeAttributes";

export default class CreateEmployeeOptions
  implements ICreateEntityOptions<IEmployee>, IEmployeeAttributes {
  constructor(
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
