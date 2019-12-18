import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import ICrudViewModel from "@/modules/crud/components/ICrudViewModel";

export default interface IEmployeeViewModel
  extends ICrudViewModel<IEmployeeEntity> {
  entityList: IEmployeeEntity[];
  readonly entityColumns: string[];
}
