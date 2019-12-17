import ICRUDService from "@/modules/crud/services/ICRUDService";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { Store } from "vuex";
import {
  CRUD_ACTION_GET_LIST,
  CRUD_MUTATION_STORE_LIST
} from "@/modules/crud/stores/CRUDStoreModule.constants";
import { ICRUDStoreState } from "@/modules/crud/stores/ICRUDStoreState";

export default class CRUDStoreModule<Entity extends IDatabaseEntity> {
  constructor(
    private service: ICRUDService<Entity>,
    readonly state: ICRUDStoreState<Entity>
  ) {}
  getActions(): {} {
    const service = this.service;
    return {
      async [CRUD_ACTION_GET_LIST](store: Store<ICRUDStoreState<Entity>>) {
        const list = await service.list();
        store.commit(CRUD_MUTATION_STORE_LIST, list);
      }
    };
  }
  readonly mutations = {
    [CRUD_MUTATION_STORE_LIST](
      state: ICRUDStoreState<Entity>,
      payload: [Entity]
    ) {
      state.list = payload;
    }
  };
}
