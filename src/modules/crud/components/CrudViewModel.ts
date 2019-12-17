import { Vue } from "vue-property-decorator";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CrudStoreModule.constants";
import { Store } from "vuex";
import ICrudViewModel from "@/modules/crud/components/ICrudViewModel";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export default abstract class CrudViewModel<
  Entity extends IDatabaseEntity,
  StoreState extends ICrudStoreState<Entity>
> extends Vue implements ICrudViewModel<Entity> {
  showCreateFormModal = false;
  showUpdateFormModal = false;
  formModel: ICreateEntityOptions<Entity> = {} as ICreateEntityOptions<Entity>;
  get crudStore(): Store<StoreState> {
    return this.$store as Store<StoreState>;
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
