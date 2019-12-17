import ISerializable from "@/modules/core/models/interfaces/ISerializable";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import { AllEmployeesQuery } from "@/API";
import EmployeeDeserializer from "@/modules/employees/models/Employee/EmployeeDeserializer";

export default class AllEmployeesDeserializer
  implements ISerializable<IEmployeeEntity[]> {
  deserialize(input: AllEmployeesQuery): IEmployeeEntity[] {
    const allEmployees = input.allEmployees;
    return allEmployees
      ? allEmployees!.map(serialized =>
          new EmployeeDeserializer().deserialize(
            (serialized as unknown) as IEmployeeEntity
          )
        )
      : [];
  }
}
