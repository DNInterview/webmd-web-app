import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import { CreateEmployeeMutationVariables } from "@/API";

export default class CreateEmployeeOptions
  implements
    ICreateEntityOptions<IEmployeeEntity>,
    CreateEmployeeMutationVariables {
  constructor(
    readonly firstName?: string,
    readonly lastName?: string,
    readonly city?: string,
    readonly state?: string,
    readonly country?: string,
    readonly phoneNumber?: string,
    readonly employmentEndDate?: string,
    readonly hireDate?: string
  ) {}
}
