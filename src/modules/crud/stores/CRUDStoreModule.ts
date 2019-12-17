import ICRUDService from "@/modules/crud/services/ICRUDService";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { Store } from "vuex";
import {
  CRUD_ACTION_GET_LIST,
  CRUD_MUTATION_STORE_LIST
} from "@/modules/crud/stores/CRUDStoreModule.constants";

export default class CRUDStoreModule<Entity extends IDatabaseEntity> {
  constructor(private service: ICRUDService<Entity>) {}

  getActions(): {} {
    const service = this.service;
    return {
      async [CRUD_ACTION_GET_LIST](store: Store<any>) {
        const list = await service.list();
        store.commit(CRUD_MUTATION_STORE_LIST, list);
      }
    };
  }
  readonly mutations = {};
}
