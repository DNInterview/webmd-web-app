import ICrudTableViewModel from "@/modules/crud/view-models/table-view/ICrudTableViewModel";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import BaseCrudViewModel from "@/modules/crud/view-models/BaseCrudViewModel";

export default abstract class CrudTableViewModel<Entity extends IDatabaseEntity>
  extends BaseCrudViewModel<Entity>
  implements ICrudTableViewModel<Entity> {
  get entityList(): Entity[] {
    return this.$store.state.entityList;
  }
  public get entityColumns(): string[] {
    if (this.entityList) {
      return this.entityList!.length ? this.entityList![0].fields : [];
    }
    return [];
  }
}
