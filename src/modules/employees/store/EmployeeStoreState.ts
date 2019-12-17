import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";

export default class EmployeeStoreState
  implements ICRUDStoreState<IEmployeeEntity> {
  constructor(readonly list: IEmployeeEntity[]) {}
}
