import CRUDStoreModule from "@/modules/crud/stores/CRUDStoreModule";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";

export default class EmployeeStoreModule extends CRUDStoreModule<IEmployee> {}
