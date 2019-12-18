import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";

export default interface IEmployeeFormViewModel<T extends IDatabaseEntity> {
  closeForm(): void;
  showForm(): void;
}
