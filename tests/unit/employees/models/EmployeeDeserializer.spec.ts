import EmployeeDeserializer from "@/modules/employees/models/Employee/EmployeeDeserializer";

describe("EmployeeDeserializer", () => {
  let deserializer: EmployeeDeserializer;
  beforeEach(() => {
    deserializer = new EmployeeDeserializer();
  });
  describe("deserialize", () => {
    it("deserializes json input", () => {
      // Arrange
      const expectedJson = {
        id: "some id",
        state: "some state",
        hireDate: "some date string",
        employmentEndDate: "1970-01-01Z"
      };

      // Act
      const actualEmployee = deserializer.deserialize(expectedJson);

      // Assert
      expect(actualEmployee.id).toEqual(expectedJson.id);
      expect(actualEmployee.state).toEqual(expectedJson.state);
      expect(actualEmployee.employmentEndDate).toEqual(
        new Date(expectedJson.employmentEndDate)
      );
      expect(actualEmployee.firstName).toBeUndefined();
      expect(actualEmployee.lastName).toBeUndefined();
      expect(actualEmployee.phoneNumber).toBeUndefined();
      expect(actualEmployee.city).toBeUndefined();
      expect(actualEmployee.country).toBeUndefined();
    });
  });
});
