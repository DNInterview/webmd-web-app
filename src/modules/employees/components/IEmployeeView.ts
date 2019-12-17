import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import ICrudView from "@/modules/crud/components/ICrudView";

export default interface IEmployeeView extends ICrudView<IEmployeeEntity> {
  list: IEmployeeEntity[];
  readonly columns: string[];
}
