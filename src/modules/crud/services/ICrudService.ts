import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IUpdateEntityOptions from "@/modules/crud/options/IUpdateEntityOptions";

export default interface ICrudService<Entity extends IDatabaseEntity> {
  create(options: ICreateEntityOptions<Entity>): Promise<void>;
  read(id: string): Promise<Entity>;
  list(): Promise<Entity[]>;
  update(id: string, options: IUpdateEntityOptions<Entity>): Promise<Entity>;
  delete(id: string): Promise<boolean>;
}
