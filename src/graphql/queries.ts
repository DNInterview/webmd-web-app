// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    firstName
    lastName
    phoneNumber
    city
    state
    country
    hireDate
    endDate
  }
}
`;
export const allEmployees = `query AllEmployees {
  allEmployees {
    id
    firstName
    lastName
    phoneNumber
    city
    state
    country
    hireDate
    endDate
  }
}
`;
