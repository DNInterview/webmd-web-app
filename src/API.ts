/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeMutationVariables = {
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  hireDate?: string | null;
  employmentEndDate?: string | null;
};

export type CreateEmployeeMutation = {
  createEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  };
};

export type UpdateEmployeeMutationVariables = {
  ID?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  hireDate?: string | null;
  employmentEndDate?: string | null;
};

export type UpdateEmployeeMutation = {
  updateEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  };
};

export type DeleteEmployeeMutationVariables = {
  id: string;
};

export type DeleteEmployeeMutation = {
  deleteEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  } | null;
};

export type GetEmployeeQueryVariables = {
  id: string;
};

export type GetEmployeeQuery = {
  getEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  } | null;
};

export type AllEmployeesQuery = {
  allEmployees: Array<{
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  } | null> | null;
};

export type NewEmployeeSubscription = {
  newEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  } | null;
};

export type UpdatedEmployeeSubscription = {
  updatedEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  } | null;
};

export type RemovedEmployeeSubscription = {
  removedEmployee: {
    __typename: "Employee";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    hireDate: string | null;
    employmentEndDate: string | null;
  } | null;
};
