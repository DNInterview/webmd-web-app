import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import ICrudTableViewModel from "@/modules/crud/view-models/table-view/ICrudTableViewModel";

export default interface IEmployeeViewModel
  extends ICrudTableViewModel<IEmployeeEntity> {
  entityList: IEmployeeEntity[];
  readonly entityColumns: string[];
}
