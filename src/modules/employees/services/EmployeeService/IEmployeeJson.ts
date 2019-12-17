export default interface IEmployeeJson {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly city?: string;
  readonly state?: string;
  readonly country?: string;
  readonly hireDate?: string;
  readonly employmentEndDate?: string;
}
