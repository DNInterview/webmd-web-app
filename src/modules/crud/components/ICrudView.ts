import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface ICrudView<T extends IDatabaseEntity> {
  list?: T[];
  readonly columns: string[];
}
