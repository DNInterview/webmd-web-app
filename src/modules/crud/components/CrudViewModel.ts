import { Vue } from "vue-property-decorator";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CrudStoreModule.constants";
import { Store } from "vuex";
import ICrudViewModel from "@/modules/crud/components/ICrudViewModel";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";

export default abstract class CrudViewModel<
  Entity extends IDatabaseEntity,
  StoreState extends ICrudStoreState<Entity>
> extends Vue implements ICrudViewModel<Entity> {
  showCreateFormModal = false;
  showUpdateFormModal = false;
  get crudStore(): Store<StoreState> {
    return this.$store as Store<StoreState>;
  }
  get formModel(): IEntityOptions<Entity> {
    return this.crudStore.state.createFormModel;
  }

  get entityList(): Entity[] {
    return this.crudStore.state.entityList;
  }
  public get entityColumns(): string[] {
    if (this.entityList) {
      return this.entityList!.length ? this.entityList![0].fields : [];
    }
    return [];
  }

  public mounted() {
    this.crudStore.dispatch(CRUD_ACTION_GET_LIST);
  }
}
