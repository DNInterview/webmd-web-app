import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import BaseCrudViewModel from "@/modules/crud/view-models/BaseCrudViewModel";
import {
  CRUD_ACTION_GET_LIST,
  CRUD_ACTION_SUBSCRIBE_DELETED_ENTITY,
  CRUD_ACTION_SUBSCRIBE_NEW_ENTITY,
  CRUD_ACTION_SUBSCRIBE_UPDATED_ENTITY
} from "@/modules/crud/stores/CrudStoreModule.constants";
import ICrudViewModel from "@/modules/crud/view-models/ICrudViewModel";

export default abstract class CrudViewModel<Entity extends IDatabaseEntity>
  extends BaseCrudViewModel<Entity>
  implements ICrudViewModel<Entity> {
  mounted() {
    this.$store.dispatch(CRUD_ACTION_GET_LIST);
    this.$store.dispatch(CRUD_ACTION_SUBSCRIBE_NEW_ENTITY);
    this.$store.dispatch(CRUD_ACTION_SUBSCRIBE_DELETED_ENTITY);
    this.$store.dispatch(CRUD_ACTION_SUBSCRIBE_UPDATED_ENTITY);
  }
}
