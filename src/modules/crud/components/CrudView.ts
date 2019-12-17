import { Vue } from "vue-property-decorator";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CRUDStoreModule.constants";
import { Store } from "vuex";
import ICrudView from "@/modules/crud/components/ICrudView";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";

export default abstract class CrudView<
  Entity extends IDatabaseEntity,
  StoreState extends ICRUDStoreState<Entity>
> extends Vue implements ICrudView<IDatabaseEntity> {
  showFormModal = false;
  formModel: IEntityOptions<IDatabaseEntity> = {} as IEntityOptions<
    IDatabaseEntity
  >;
  get crudStore(): Store<StoreState> {
    return this.$store as Store<StoreState>;
  }
  get entityList(): Entity[] {
    return this.crudStore.state.list;
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
