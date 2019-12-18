import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import { Vue } from "vue-property-decorator";

export default abstract class BaseCrudViewModel<
  Entity extends IDatabaseEntity
> extends Vue {
  get crudState(): ICrudStoreState<Entity> {
    return this.$store.state;
  }
}
