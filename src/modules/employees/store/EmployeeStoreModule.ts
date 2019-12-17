import CrudStoreModule from "@/modules/crud/stores/CrudStoreModule";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";

export default class EmployeeStoreModule extends CrudStoreModule<
  IEmployeeEntity
> {}
