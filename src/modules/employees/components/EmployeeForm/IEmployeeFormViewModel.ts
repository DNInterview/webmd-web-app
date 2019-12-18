import IEntityOptions from "@/modules/crud/options/IEntityOptions";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface IEmployeeFormViewModel<T extends IDatabaseEntity> {
  formModel?: IEntityOptions<T>;
  showFormModal: boolean;

  closeForm(): void;
  showForm(): void;
}
