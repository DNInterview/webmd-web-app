import AWSService from "@/modules/core/services/cloud/AWSService/AWSService";
import EmployeeService from "@/modules/employees/services/EmployeeService/EmployeeService";
import AWS from "aws-sdk";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
describe("EmployeeService", () => {
  let employeeService: EmployeeService;
  beforeAll(() => {
    const awsService = new AWSService(
      new AWS.Credentials({
        accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY || ""
      })
    );
    employeeService = new EmployeeService(awsService.appSyncClient);
  });
  describe("create", () => {
    it("creates an employee", async () => {
      // Arrange
      const employeeOptions = new CreateEmployeeOptions(
        "first",
        "last",
        "city",
        "state",
        "country",
        "phoneNumber",
        new Date(),
        new Date()
      );

      // Act
      const actualEmployee = await employeeService.create(employeeOptions);

      // Assert
      expect(actualEmployee).toEqual(employeeOptions);
    });
  });
});
