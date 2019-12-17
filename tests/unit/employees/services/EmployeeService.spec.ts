import EmployeeService from "@/modules/employees/services/EmployeeService/EmployeeService";
import AWSAppSyncClient from "aws-appsync/lib";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import Employee from "@/modules/employees/models/Employee/Employee";
import { AllEmployeesQuery } from "@/API";
import gql from "graphql-tag";
import { allEmployees } from "@/graphql/queries";
describe("EmployeeService", () => {
  let employeeService: EmployeeService;
  let mockAppSyncClient: AWSAppSyncClient<NormalizedCacheObject>;
  beforeAll(() => {
    mockAppSyncClient = {} as AWSAppSyncClient<NormalizedCacheObject>;
    employeeService = new EmployeeService(mockAppSyncClient);
  });
  describe("list", () => {
    it("queries the client and returns a list of employees", async () => {
      // Arrange

      const expectedId1 = "id1";
      const expectedId2 = "id2";
      const expectedQuery = { query: gql(allEmployees) };

      const expectedResponse: AllEmployeesQuery = {
        allEmployees: [
          {
            __typename: "Employee",
            id: expectedId1,
            firstName: null,
            lastName: null,
            phoneNumber: null,
            city: null,
            state: null,
            country: null,
            hireDate: null,
            employmentEndDate: null
          },
          {
            __typename: "Employee",
            id: expectedId2,
            firstName: null,
            lastName: null,
            phoneNumber: null,
            city: null,
            state: null,
            country: null,
            hireDate: null,
            employmentEndDate: null
          }
        ]
      };
      const expectedEmployees = [
        new Employee(
          expectedId1,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ),
        new Employee(
          expectedId2,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        )
      ];
      mockAppSyncClient.hydrated = jest.fn();
      mockAppSyncClient.query = jest
        .fn()
        .mockReturnValueOnce(
          new Promise(resolve => resolve({ data: expectedResponse }))
        );

      // Act
      const actualEmployees = await employeeService.list();

      // Assert
      expect(mockAppSyncClient.hydrated).toHaveBeenCalled();
      expect(mockAppSyncClient.query).toHaveBeenCalledWith(expectedQuery);
      expect(actualEmployees).toEqual(expectedEmployees);
    });
  });
});
