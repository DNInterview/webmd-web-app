import IEmployee from "@/modules/employees/models/Employee/IEmployee";
import { Field, ReflectFields } from "@/modules/core/models/ReflectFields";

export default class Employee extends ReflectFields implements IEmployee {
  readonly _typename: string = "Employee";
  @Field()
  readonly id: string;
  @Field()
  readonly firstName?: string | null;
  @Field()
  readonly lastName?: string | null;
  @Field()
  readonly phoneNumber?: string | null;
  @Field()
  readonly city?: string | null;
  @Field()
  readonly state?: string | null;
  @Field()
  readonly country?: string | null;
  @Field()
  readonly hireDate?: string | null;
  @Field()
  readonly employmentEndDate?: string | null;

  constructor(
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    hireDate?: string | null,
    employmentEndDate?: string | null
  ) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.state = state;
    this.country = country;
    this.hireDate = hireDate;
    this.employmentEndDate = employmentEndDate;
  }
}
