import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";

export default interface ICrudView<Entity extends IDatabaseEntity> {
  formModel: IEntityOptions<Entity>;
  showCreateFormModal: boolean;
  showUpdateFormModal: boolean;
  readonly entityList: Entity[];
  readonly entityColumns: string[];
  mounted(): void;
}
