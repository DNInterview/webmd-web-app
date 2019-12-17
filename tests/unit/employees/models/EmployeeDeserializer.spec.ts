import EmployeeDeserializer from "@/modules/employees/models/Employee/EmployeeDeserializer";

describe("EmployeeDeserializer", () => {
  let deserializer: EmployeeDeserializer;
  beforeEach(() => {
    deserializer = new EmployeeDeserializer();
  });
  describe("deserialize", () => {
    describe("happy path", () => {
      it("deserializes json input", () => {
        // Arrange
        const expectedJson = {
          id: "some id",
          _typename: "Employee",
          state: "some state",
          hireDate: "1970-01-01Z",
          employmentEndDate: "1970-01-01Z",
          firstName: "some firstName",
          lastName: "some lastName",
          phoneNumber: "some phoneNumber",
          city: "some city",
          country: "some country"
        };

        // Act
        const actualEmployee = deserializer.deserialize(expectedJson);

        // Assert
        expect(actualEmployee.id).toEqual(expectedJson.id);
        expect(actualEmployee.state).toEqual(expectedJson.state);
        expect(actualEmployee.employmentEndDate).toEqual(
          expectedJson.employmentEndDate
        );

        expect(actualEmployee.hireDate).toEqual(expectedJson.hireDate);
        expect(actualEmployee.firstName).toEqual(expectedJson.firstName);
        expect(actualEmployee.lastName).toEqual(expectedJson.lastName);
        expect(actualEmployee.phoneNumber).toEqual(expectedJson.phoneNumber);
        expect(actualEmployee.city).toEqual(expectedJson.city);
        expect(actualEmployee.country).toEqual(expectedJson.country);
      });
    });
    describe("null values", () => {
      it("returns undefined for undefined values", () => {
        const expectedJson = {
          id: "some id",
          _typename: "Employee",
          state: null,
          hireDate: null,
          employmentEndDate: null,
          firstName: null,
          lastName: null,
          phoneNumber: null,
          city: null,
          country: null
        };
        // Act
        const actualEmployee = deserializer.deserialize(expectedJson);

        // Assert
        expect(actualEmployee.id).toEqual(expectedJson.id);
        expect(actualEmployee.state).toBeNull();
        expect(actualEmployee.firstName).toBeNull();
        expect(actualEmployee.lastName).toBeNull();
        expect(actualEmployee.phoneNumber).toBeNull();
        expect(actualEmployee.city).toBeNull();
        expect(actualEmployee.country).toBeNull();
      });
    });
  });
});
