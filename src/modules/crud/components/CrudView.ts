import { Vue } from "vue-property-decorator";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CRUDStoreModule.constants";
import { Store } from "vuex";
import ICrudView from "@/modules/crud/components/ICrudView";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";

export default abstract class CrudView<
  Entity extends IDatabaseEntity,
  StoreState extends ICRUDStoreState<Entity>
> extends Vue implements ICrudView<IDatabaseEntity> {
  public mounted() {
    debugger;
    this.crudStore.dispatch(CRUD_ACTION_GET_LIST);
  }
  get crudStore(): Store<StoreState> {
    return this.$store as Store<StoreState>;
  }
  get list(): Entity[] {
    debugger;
    return this.crudStore.state.list;
  }
  public get columns(): string[] {
    if (this.list) {
      return this.list!.length ? this.list![0].fields : [];
    }
    return [];
  }
}
