import IEmployeeEntity from "../../models/Employee/IEmployeeEntity";
import AWSAppSyncClient from "aws-appsync/lib";
import { NormalizedCacheObject } from "apollo-cache-inmemory/lib/types";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
import UpdateEmployeeOptions from "@/modules/employees/services/EmployeeService/UpdateEmployeeOptions";
import { allEmployees } from "@/graphql/queries";
import gql from "graphql-tag";
import { AllEmployeesQuery } from "@/API";
import AllEmployeesDeserializer from "@/modules/employees/services/EmployeeService/AllEmployeesDeserializer";
import EmployeeQueryBuilder from "../../../../../tests/unit/employees/services/EmployeeQueryBuilder";
import { newEmployee } from "@/graphql/subscriptions";
import EmployeeDeserializer from "@/modules/employees/models/Employee/EmployeeDeserializer";
import { deleteEmployee, updateEmployee } from "@/graphql/mutations";
import ICrudSubscriber from "@/modules/core/services/subscriber/ICrudSubscriber";

export type EmployeeSubscribeCallback = (entity: IEmployeeEntity) => void;

export default class EmployeeService
  implements ICrudSubscriber<IEmployeeEntity> {
  constructor(
    private client: AWSAppSyncClient<NormalizedCacheObject>,
    private queryBuilder: EmployeeQueryBuilder
  ) {}
  async create(options: CreateEmployeeOptions): Promise<void> {
    await this.client.hydrated();
    await this.client.mutate({
      mutation: gql(this.queryBuilder.create(options))
    });
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
    return this.client.mutate({
      mutation: gql(this.queryBuilder.update(id))
    });
  }
  delete(id: string): Promise<boolean> {
    debugger;
    return this.client.mutate({
      mutation: gql(this.queryBuilder.delete(id))
    });
  }

  async subscribeCreate(
    newEntityCallback: EmployeeSubscribeCallback
  ): Promise<void> {
    await this.subscribe(newEmployee, newEntityCallback);
  }

  async subscribeDelete(
    deletedEntity: EmployeeSubscribeCallback
  ): Promise<void> {
    await this.subscribe(deleteEmployee, deletedEntity);
  }

  async subscribeUpdate(
    updatedEntity: EmployeeSubscribeCallback
  ): Promise<void> {
    await this.subscribe(updateEmployee, updatedEntity);
  }
  private async subscribe(
    query: string,
    subscribeCallback: EmployeeSubscribeCallback
  ) {
    await this.client.hydrated();
    const observer = this.client.subscribe({
      query: gql(query)
    });
    observer.subscribe({
      next(value) {
        debugger;
        const employee = new EmployeeDeserializer().deserialize(
          value as IEmployeeEntity
        );
        subscribeCallback(employee);
      }
    });
  }
}
