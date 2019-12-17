import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import IUpdateEntityOptions from "@/modules/crud/options/IUpdateEntityOptions";

export default class UpdateEmployeeOptions
  implements IUpdateEntityOptions<IEmployee> {}
