import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import { EmployeeFormViewModelType } from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModelType";

export default class EmployeeStoreState
  implements ICrudStoreState<IEmployeeEntity> {
  constructor(
    public entityList: IEmployeeEntity[],
    public formModel: ICreateEntityOptions<IEmployeeEntity>,
    public shouldShowForm: boolean,
    public formType: EmployeeFormViewModelType,
    public activityInProgress: boolean
  ) {}
}
