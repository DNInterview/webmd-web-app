import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";

export default class EmployeeQueryBuilder {
  create(options: CreateEmployeeOptions): string {
    return `
      mutation CreateTask {
  createEmployee(
        firstName: "${options.firstName || " "}",
        lastName: "${options.lastName || " "}",
        phoneNumber: "${options.phoneNumber || " "}",
        city: "${options.city || " "}",
        state: "${options.state || " "}",
        country: "${options.country || " "}",
        hireDate: "${options.hireDate || " "}",
        employmentEndDate: "${options.employmentEndDate || " "}"
  ) {
        id
        firstName
        lastName
        phoneNumber
        city
        state
        country
        hireDate
        employmentEndDate
  }
}
      `;
  }
  delete(id: string): string {
    return `mutation DeleteEmployee {
  deleteEmployee(
      id: "${id}"
  ) {
        id
        firstName
        lastName
        phoneNumber
        city
        state
        country
        hireDate
        employmentEndDate
  }
}
`;
  }
  update(id: string): string {
    return `mutation Update {
  updateEmployee(
      id: "${id}"
  ) {
        id
        firstName
        lastName
        phoneNumber
        city
        state
        country
        hireDate
        employmentEndDate
  }
}
`;
  }
}
