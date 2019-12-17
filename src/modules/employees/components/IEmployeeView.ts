import IEmployee from "@/modules/employees/models/Employee/IEmployee";

export default interface IEmployeeView {
  list: IEmployee[];
  readonly columns: string[];
}
