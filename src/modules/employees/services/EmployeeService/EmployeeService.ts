import ICRUDService from "../../../crud/services/ICRUDService";
import IEmployee from "../../models/Employee/IEmployee";
import AWSAppSyncClient from "aws-appsync/lib";
import { NormalizedCacheObject } from "apollo-cache-inmemory/lib/types";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
import UpdateEmployeeOptions from "@/modules/employees/services/EmployeeService/UpdateEmployeeOptions";
import { createEmployee } from "@/graphql/mutations";
import gql from "graphql-tag";

export default class EmployeeService implements ICRUDService<IEmployee> {
  constructor(private client: AWSAppSyncClient<NormalizedCacheObject>) {}
  create(options: CreateEmployeeOptions): Promise<IEmployee> {
    this.client.mutate({
      mutation: gql
    });
    return new Promise(resolve => resolve());
  }
  read(id: string): Promise<IEmployee> {
    throw new Error("not yet implemented");
  }
  list(): Promise<[IEmployee]> {
    throw new Error("not yet implemented");
  }
  update(id: string, options: UpdateEmployeeOptions): Promise<IEmployee> {
    throw new Error("not yet implemented");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("not yet implemented");
  }
}
