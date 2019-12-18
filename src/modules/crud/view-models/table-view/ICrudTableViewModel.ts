import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface ICrudTableViewModel<Entity extends IDatabaseEntity> {
  readonly entityList: Entity[];
  readonly entityColumns: string[];
}
