import ICRUDService from "../../../crud/services/ICRUDService";
import IEmployeeEntity from "../../models/Employee/IEmployeeEntity";
import AWSAppSyncClient from "aws-appsync/lib";
import { NormalizedCacheObject } from "apollo-cache-inmemory/lib/types";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
import UpdateEmployeeOptions from "@/modules/employees/services/EmployeeService/UpdateEmployeeOptions";
import { allEmployees } from "@/graphql/queries";
import gql from "graphql-tag";
import { AllEmployeesQuery } from "@/API";
import AllEmployeesDeserializer from "@/modules/employees/services/EmployeeService/AllEmployeesDeserializer";

export default class EmployeeService implements ICRUDService<IEmployeeEntity> {
  constructor(private client: AWSAppSyncClient<NormalizedCacheObject>) {}
  async create(options: CreateEmployeeOptions): Promise<IEmployeeEntity> {
    throw new Error("not yet implemented");
  }
  read(id: string): Promise<IEmployeeEntity> {
    throw new Error("not yet implemented");
  }
  async list(): Promise<IEmployeeEntity[]> {
    await this.client.hydrated();
    const result = await this.client.query<AllEmployeesQuery>({
      query: gql(allEmployees)
    });
    return new AllEmployeesDeserializer().deserialize(result.data);
  }
  update(id: string, options: UpdateEmployeeOptions): Promise<IEmployeeEntity> {
    throw new Error("not yet implemented");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("not yet implemented");
  }
}
