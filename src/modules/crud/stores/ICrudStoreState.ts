import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export interface ICrudStoreState<T extends IDatabaseEntity> {
  entityList: T[];
  formModel: ICreateEntityOptions<T>;
  shouldShowForm: boolean;
}
