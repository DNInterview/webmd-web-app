import IdentifiableDbObject from "@/models/interfaces/IdentifiableDbObject";
import ICreateEmployee from "@/models/Employee/CreateEmployee/ICreateEmployee";

export default interface IEmployee
  extends ICreateEmployee,
    IdentifiableDbObject {}
