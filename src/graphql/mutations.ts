// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee(
  $firstName: String
  $lastName: String
  $phoneNumber: String
  $city: String
  $state: String
  $country: String
  $hireDate: String
  $employmentEndDate: String
) {
  createEmployee(
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phoneNumber
    city: $city
    state: $state
    country: $country
    hireDate: $hireDate
    employmentEndDate: $employmentEndDate
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
export const updateEmployee = `mutation UpdateEmployee(
  $firstName: String
  $lastName: String
  $phoneNumber: String
  $city: String
  $state: String
  $country: String
  $hireDate: String
  $employmentEndDate: String
) {
  updateEmployee(
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phoneNumber
    city: $city
    state: $state
    country: $country
    hireDate: $hireDate
    employmentEndDate: $employmentEndDate
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
export const deleteEmployee = `mutation DeleteEmployee($id: ID!) {
  deleteEmployee(id: $id) {
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
