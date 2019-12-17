import { Vue } from "vue-property-decorator";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CRUDStoreModule.constants";
import { Store } from "vuex";
import ICrudViewModel from "@/modules/crud/components/ICrudViewModel";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

export default abstract class CrudViewModel<
  Entity extends IDatabaseEntity,
  StoreState extends ICRUDStoreState<Entity>
> extends Vue implements ICrudViewModel<IDatabaseEntity> {
  showCreateFormModal = false;
  showUpdateFormModal = false;
  formModel: ICreateEntityOptions<IDatabaseEntity> = {} as ICreateEntityOptions<
    IDatabaseEntity
  >;
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
