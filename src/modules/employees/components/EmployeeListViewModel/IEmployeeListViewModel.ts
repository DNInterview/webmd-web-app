import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface IEmployeeListViewModel<T extends IDatabaseEntity> {
  entityColumns: string[];
  entityList: T[];
}
