import IEntityOptions from "@/modules/crud/options/IEntityOptions";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IUpdateEntityOptions from "@/modules/crud/options/IUpdateEntityOptions";

export default interface ICRUDService<Entity extends IDatabaseEntity> {
  create(options: IEntityOptions<Entity>): Promise<Entity>;
  read(id: string): Promise<Entity>;
  list(): Promise<Entity[]>;
  update(id: string, options: IUpdateEntityOptions<Entity>): Promise<Entity>;
  delete(id: string): Promise<boolean>;
}
