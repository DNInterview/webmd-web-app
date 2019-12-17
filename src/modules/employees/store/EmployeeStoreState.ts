import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";

export default class EmployeeStoreState implements ICRUDStoreState<IEmployee> {
  list?: [IEmployee];
}
