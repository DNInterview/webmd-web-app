import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";

export default class EmployeeStoreState
  implements ICRUDStoreState<IEmployeeEntity> {
  constructor(
    readonly entityList: IEmployeeEntity[],
    readonly createFormModel: CreateEmployeeOptions
  ) {}
}
