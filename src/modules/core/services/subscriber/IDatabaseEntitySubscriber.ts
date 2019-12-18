import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface IDatabaseEntitySubscriber<T extends IDatabaseEntity> {
  subscribeCreate(newEntityCallback: (entity: T) => void): Promise<void>;
  subscribeUpdate(updatedEntity: (entity: T) => void): Promise<void>;
  subscribeDelete(deletedEntity: (entity: T) => void): Promise<void>;
}
