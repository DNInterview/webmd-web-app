import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export interface ICRUDStoreState<T extends IDatabaseEntity> {
  entityList: T[];
  createFormModel: ICreateEntityOptions<T>;
}
