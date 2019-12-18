import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import { Store } from "vuex";
import {
  CRUD_ACTION_CREATE_ENTITY,
  CRUD_ACTION_DELETE_ENTITY,
  CRUD_ACTION_GET_LIST,
  CRUD_ACTION_SUBSCRIBE_DELETED_ENTITY,
  CRUD_ACTION_SUBSCRIBE_NEW_ENTITY,
  CRUD_ACTION_SUBSCRIBE_UPDATED_ENTITY,
  CRUD_ACTION_UPDATE_ENTITY,
  CRUD_MUTATION_DELETED_ENTITY,
  CRUD_MUTATION_NEW_ENTITY,
  CRUD_MUTATION_STORE_LIST,
  CRUD_MUTATION_UPDATED_ENTITY
} from "@/modules/crud/stores/CrudStoreModule.constants";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import ICrudSubscriber from "@/modules/core/services/subscriber/ICrudSubscriber";

export default abstract class CrudStoreModule<Entity extends IDatabaseEntity> {
  constructor(private service: ICrudSubscriber<Entity>) {}
  get actions(): {} {
    const service: ICrudSubscriber<Entity> = this.service;
    return {
      async [CRUD_ACTION_GET_LIST](store: Store<ICrudStoreState<Entity>>) {
        const list = await service.list();
        store.commit(CRUD_MUTATION_STORE_LIST, list);
      },
      [CRUD_ACTION_CREATE_ENTITY](
        store: Store<ICrudStoreState<Entity>>,
        payload: ICreateEntityOptions<Entity>
      ) {
        service.create(payload);
      },
      [CRUD_ACTION_UPDATE_ENTITY](
        store: Store<ICrudStoreState<Entity>>,
        payload: Entity
      ) {
        service.update(payload.id, payload);
      },
      async [CRUD_ACTION_DELETE_ENTITY](
        store: Store<ICrudStoreState<Entity>>,
        payload: Entity
      ) {
        await service.delete(payload.id);
      },
      [CRUD_ACTION_SUBSCRIBE_NEW_ENTITY](
        store: Store<ICrudStoreState<Entity>>
      ) {
        service.subscribeCreate(entity => {
          store.commit(CRUD_MUTATION_NEW_ENTITY, entity);
        });
      },
      [CRUD_ACTION_SUBSCRIBE_DELETED_ENTITY](
        store: Store<ICrudStoreState<Entity>>
      ) {
        service.subscribeDelete(entity => {
          store.commit(CRUD_MUTATION_DELETED_ENTITY, entity);
        });
      },
      [CRUD_ACTION_SUBSCRIBE_UPDATED_ENTITY](
        store: Store<ICrudStoreState<Entity>>
      ) {
        service.subscribeUpdate(entity => {
          store.commit(CRUD_MUTATION_UPDATED_ENTITY, entity);
        });
      }
    };
  }
  readonly mutations = {
    [CRUD_MUTATION_STORE_LIST](
      state: ICrudStoreState<Entity>,
      payload: [Entity]
    ) {
      state.entityList = payload;
    },
    [CRUD_MUTATION_NEW_ENTITY](
      state: ICrudStoreState<Entity>,
      payload: Entity
    ) {
      state.entityList.push(payload);
    },
    [CRUD_MUTATION_DELETED_ENTITY](
      state: ICrudStoreState<Entity>,
      payload: Entity
    ) {
      let foundIndex: number = -1;
      for (let i = 0; i <= state.entityList.length; i++) {
        const entity = state.entityList[i];
        if (entity.id === payload.id) {
          foundIndex = i;
          break;
        }
      }
      if (foundIndex) {
        state.entityList.splice(foundIndex, 1);
      }
    },
    [CRUD_MUTATION_UPDATED_ENTITY](
      state: ICrudStoreState<Entity>,
      payload: Entity
    ) {
      let foundIndex: number = 0;
      const entity = state.entityList.find((entInList, index) => {
        foundIndex = index;
        return entInList.id === payload.id;
      });
      if (entity && foundIndex) {
        state.entityList[foundIndex] = payload;
      }
    }
  };
}
