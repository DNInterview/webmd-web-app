import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface ICrudViewModel<Entity extends IDatabaseEntity> {
  mounted(): void;
}
