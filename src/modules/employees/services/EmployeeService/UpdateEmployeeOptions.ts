import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import IUpdateEntityOptions from "@/modules/crud/options/IUpdateEntityOptions";

export default class UpdateEmployeeOptions
  implements IUpdateEntityOptions<IEmployeeEntity> {}
