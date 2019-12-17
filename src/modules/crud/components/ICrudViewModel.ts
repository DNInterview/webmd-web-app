import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export default interface ICrudViewModel<Entity extends IDatabaseEntity> {
  formModel: ICreateEntityOptions<Entity>;
  showCreateFormModal: boolean;
  showUpdateFormModal: boolean;
  readonly entityList: Entity[];
  readonly entityColumns: string[];
  mounted(): void;
}
