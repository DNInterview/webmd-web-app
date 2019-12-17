import ISerializable from "@/modules/core/models/interfaces/ISerializable";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import Employee from "@/modules/employees/models/Employee/Employee";

export default class EmployeeDeserializer implements ISerializable<IEmployee> {
  deserialize(input: IEmployee): IEmployee {
    return new Employee(
      input.id,
      input.firstName,
      input.lastName,
      input.phoneNumber,
      input.city,
      input.state,
      input.country,
      input.hireDate,
      input.employmentEndDate
    );
  }
}
