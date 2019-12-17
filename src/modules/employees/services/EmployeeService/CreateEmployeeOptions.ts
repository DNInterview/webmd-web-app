import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import { CreateEmployeeMutationVariables } from "@/API";
import { Field, ReflectFields } from "@/modules/core/models/ReflectFields";

export default class CreateEmployeeOptions extends ReflectFields
  implements
    ICreateEntityOptions<IEmployeeEntity>,
    CreateEmployeeMutationVariables {
  @Field()
  firstName?: string;
  @Field()
  lastName?: string;
  @Field()
  city?: string;
  @Field()
  state?: string;
  @Field()
  country?: string;
  @Field()
  phoneNumber?: string;
  @Field()
  employmentEndDate?: string;
  @Field()
  hireDate?: string;
}
