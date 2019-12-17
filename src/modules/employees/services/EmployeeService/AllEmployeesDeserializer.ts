import ISerializable from "@/modules/core/models/interfaces/ISerializable";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import { AllEmployeesQuery } from "@/API";
import EmployeeDeserializer from "@/modules/employees/models/Employee/EmployeeDeserializer";

export default class AllEmployeesDeserializer
  implements ISerializable<IEmployee[]> {
  deserialize(input: AllEmployeesQuery): IEmployee[] {
    const allEmployees = input.allEmployees;
    return allEmployees
      ? allEmployees!.map(serialized =>
          new EmployeeDeserializer().deserialize(
            (serialized as unknown) as IEmployee
          )
        )
      : [];
  }
}
