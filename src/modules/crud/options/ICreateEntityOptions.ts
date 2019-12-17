import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";

export default interface ICreateEntityOptions<T extends IDatabaseEntity>
  extends IEntityOptions<T> {}
