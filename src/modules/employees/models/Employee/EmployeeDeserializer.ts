import ISerializable from "@/modules/core/models/interfaces/ISerializable";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeJson from "@/modules/employees/services/EmployeeService/IEmployeeJson";

export default class EmployeeDeserializer implements ISerializable<IEmployee> {
  deserialize(input: IEmployeeJson): IEmployee {
    return new Employee(
      input.id,
      input.firstName,
      input.lastName,
      input.city,
      input.state,
      input.country,
      input.phoneNumber,
      new Date(input.employmentEndDate || ""),
      new Date(input.hireDate || "")
    );
  }
}
