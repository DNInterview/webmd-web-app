import ISerializable from "@/modules/core/models/interfaces/ISerializable";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import { AllEmployeesQuery } from "@/API";
import EmployeeDeserializer from "@/modules/employees/models/Employee/EmployeeDeserializer";

export default class AllEmployeesDeserializer
  implements ISerializable<IEmployee[]> {
  deserialize(input: AllEmployeesQuery): IEmployee[] {
    const employees: IEmployee[] = [];
    for (let serializedEmployee in input.allEmployees) {
      employees.push(
        new EmployeeDeserializer().deserialize(
          JSON.parse(serializedEmployee, x => (x === undefined ? null : x))
        )
      );
    }
    return employees;
  }
}
