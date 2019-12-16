import ICreateDBEntityOptions from "@/models/interfaces/ICreateDBEntityOptions";

export default interface ICreateEmployee extends ICreateDBEntityOptions {
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly hireDate: Date;
  readonly employmentEndDate: Date;
}
