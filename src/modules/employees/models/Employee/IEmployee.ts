import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IEmployeeAttributes from "@/modules/employees/models/Employee/IEmployeeAttributes";

export default interface IEmployee
  extends IDatabaseEntity,
    IEmployeeAttributes {}
