import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import ICrudView from "@/modules/crud/components/ICrudView";

export default interface IEmployeeView extends ICrudView<IEmployeeEntity> {
  entityList: IEmployeeEntity[];
  readonly entityColumns: string[];
}
