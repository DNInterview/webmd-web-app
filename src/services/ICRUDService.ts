import ICreateDBEntityOptions from "@/models/interfaces/ICreateDBEntityOptions";

export default interface ICRUDService<T extends ICreateDBEntityOptions> {
  create(options: T): Promise<T>;
  read(id: string): Promise<T>;
  list(): Promise<[T]>;
  update(id: string): Promise<T>;
  delete(id: string): Promise<boolean>;
}
