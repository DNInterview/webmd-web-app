import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ReflectFields } from "@/modules/core/models/ReflectFields";

export default interface IEntityOptions<T extends IDatabaseEntity>
  extends ReflectFields {}
