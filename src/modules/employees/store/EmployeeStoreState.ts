import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export default class EmployeeStoreState
  implements ICrudStoreState<IEmployeeEntity> {
  constructor(
    readonly entityList: IEmployeeEntity[],
    public createFormModel: ICreateEntityOptions<IEmployeeEntity>,
    public shouldShowForm: boolean
  ) {}
}
