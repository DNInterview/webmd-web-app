import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICrudFormViewModel from "@/modules/crud/view-models/form/ICrudFormViewModel";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";
import BaseCrudViewModel from "@/modules/crud/view-models/BaseCrudViewModel";

export default abstract class CrudFormViewModel<Entity extends IDatabaseEntity>
  extends BaseCrudViewModel<Entity>
  implements ICrudFormViewModel<Entity> {
  get formModel(): IEntityOptions<Entity> {
    return this.$store.state.formModel;
  }

  get shouldShowForm(): boolean {
    return this.$store.state.shouldShowForm;
  }

  abstract submitForm(): void;

  abstract closeForm(): void;

  abstract showForm(): void;
}
