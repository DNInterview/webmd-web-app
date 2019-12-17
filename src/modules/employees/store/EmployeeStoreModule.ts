import CRUDStoreModule from "@/modules/crud/stores/CRUDStoreModule";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";

export default class EmployeeStoreModule extends CRUDStoreModule<
  IEmployeeEntity
> {}
