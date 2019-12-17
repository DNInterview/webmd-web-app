import ISerializable from "@/modules/core/models/interfaces/ISerializable";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import Employee from "@/modules/employees/models/Employee/Employee";

export default class EmployeeDeserializer
  implements ISerializable<IEmployeeEntity> {
  deserialize(input: IEmployeeEntity): IEmployeeEntity {
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
