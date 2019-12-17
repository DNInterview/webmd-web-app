import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export interface ICRUDStoreState<T extends IDatabaseEntity> {
  list: T[];
}
