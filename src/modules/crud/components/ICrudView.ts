import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface ICrudView<Entity extends IDatabaseEntity> {
  mounted(): void;
  list: Entity[];
  readonly columns: string[];
}
