import ICRUDService from "../ICRUDService";
import IEmployee from "../../models/Employee/IEmployee";
import AWSAppSyncClient from "aws-appsync/lib";
import {
  NormalizedCacheObject,
  StoreObject
} from "apollo-cache-inmemory/lib/types";

class Cache implements NormalizedCacheObject {
  [dataId: string]: StoreObject;
}
export default class AWSEmployeeService implements ICRUDService<IEmployee> {
  constructor(private client: AWSAppSyncClient<Cache>) {}

  create(attributes: IEmployee): Promise<IEmployee> {
    throw new Error("not yet implemented");
  }
  read(id: string): Promise<IEmployee> {
    throw new Error("not yet implemented");
  }
  list(): Promise<[IEmployee]> {
    throw new Error("not yet implemented");
  }
  update(id: string): Promise<IEmployee> {
    throw new Error("not yet implemented");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("not yet implemented");
  }
}
