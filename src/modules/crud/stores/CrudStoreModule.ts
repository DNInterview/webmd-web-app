import ICrudService from "@/modules/crud/services/ICrudService";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { Store } from "vuex";
import {
  CRUD_ACTION_GET_LIST,
  CRUD_MUTATION_STORE_LIST
} from "@/modules/crud/stores/CrudStoreModule.constants";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";

export default abstract class CrudStoreModule<Entity extends IDatabaseEntity> {
  constructor(private service: ICrudService<Entity>) {}
  get actions(): {} {
    const service: ICrudService<Entity> = this.service;
    return {
      async [CRUD_ACTION_GET_LIST](store: Store<ICrudStoreState<Entity>>) {
        const list = await service.list();
        store.commit(CRUD_MUTATION_STORE_LIST, list);
      }
    };
  }
  readonly mutations = {
    [CRUD_MUTATION_STORE_LIST](
      state: ICrudStoreState<Entity>,
      payload: [Entity]
    ) {
      state.entityList = payload;
    }
  };
}
