import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface IEmployee extends IDatabaseEntity {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly city?: string;
  readonly state?: string;
  readonly country?: string;
  readonly phoneNumber?: string;
  readonly employmentEndDate?: Date;
  readonly hireDate?: Date;
}
