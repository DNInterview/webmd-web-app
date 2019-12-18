import CrudViewModel from "@/modules/crud/view-models/CrudViewModel";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import { Store } from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import ICrudViewModel from "@/modules/crud/view-models/ICrudViewModel";
import Employee from "@/modules/employees/models/Employee/Employee";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CrudStoreModule.constants";

describe("CrudViewModel", () => {
  class TestCrudViewModel extends CrudViewModel<IEmployeeEntity> {}

  const testCrudViewModel = new TestCrudViewModel();
  describe("mounted", () => {
    it("calls getList", () => {
      // Arrange
      testCrudViewModel.$store = {} as Store<EmployeeStoreState>;
      testCrudViewModel.$store.dispatch = jest.fn();

      // Act
      ((testCrudViewModel as unknown) as ICrudViewModel<Employee>).mounted();

      // Assert
      expect(testCrudViewModel.$store.dispatch).toHaveBeenCalledWith(
        CRUD_ACTION_GET_LIST
      );
    });
  });
});
