// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee(
  $firstName: String
  $lastName: String
  $phoneNumber: Int
  $city: String
  $state: String
  $country: String
  $hireDate: AWSDate
  $endDate: AWSDate
) {
  createEmployee(
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phoneNumber
    city: $city
    state: $state
    country: $country
    hireDate: $hireDate
    endDate: $endDate
  ) {
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
export const updateEmployee = `mutation UpdateEmployee(
  $firstName: String
  $lastName: String
  $phoneNumber: Int
  $city: String
  $state: String
  $country: String
  $hireDate: AWSDate
  $endDate: AWSDate
) {
  updateEmployee(
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phoneNumber
    city: $city
    state: $state
    country: $country
    hireDate: $hireDate
    endDate: $endDate
  ) {
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
export const deleteEmployee = `mutation DeleteEmployee($id: ID!) {
  deleteEmployee(id: $id)
}
`;
