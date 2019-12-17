import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface IEmployeeEntity extends IDatabaseEntity {
  readonly _typename: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly hireDate?: string | null;
  readonly employmentEndDate?: string | null;
}
