import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export default interface ICrudViewModel<Entity extends IDatabaseEntity> {
  readonly formModel: ICreateEntityOptions<Entity>;
  readonly entityList: Entity[];
  readonly entityColumns: string[];
  readonly shouldShowForm: boolean;
  mounted(): void;
  closeForm(): void;
  showForm(): void;
}
