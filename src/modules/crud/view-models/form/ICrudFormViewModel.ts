import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";

export default interface ICrudFormViewModel<T extends IDatabaseEntity> {
  readonly shouldShowForm: boolean;
  readonly formModel: IEntityOptions<T>;
  closeForm(): void;
  showForm(): void;
}
