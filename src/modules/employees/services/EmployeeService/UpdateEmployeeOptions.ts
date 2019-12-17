import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import IUpdateEntityOptions from "@/modules/crud/options/IUpdateEntityOptions";
import { Field, ReflectFields } from "@/modules/core/models/ReflectFields";
import { UpdateEmployeeMutationVariables } from "@/API";

export default class UpdateEmployeeOptions extends ReflectFields
  implements
    IUpdateEntityOptions<IEmployeeEntity>,
    UpdateEmployeeMutationVariables {
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
