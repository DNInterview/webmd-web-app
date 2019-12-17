import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ReflectFields } from "@/modules/core/models/ReflectFields";

export default interface ICreateEntityOptions<T extends IDatabaseEntity>
  extends ReflectFields {}
