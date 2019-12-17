import ICRUDService from "../../../crud/services/ICRUDService";
import IEmployee from "../../models/Employee/IEmployee";
import AWSAppSyncClient from "aws-appsync/lib";
import { NormalizedCacheObject } from "apollo-cache-inmemory/lib/types";

export default class EmployeeService implements ICRUDService<IEmployee> {
  constructor(private client: AWSAppSyncClient<NormalizedCacheObject>) {}

  create(): Promise<IEmployee> {
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
