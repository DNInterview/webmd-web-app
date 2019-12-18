import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeViewModel from "@/modules/employees/components/IEmployeeViewModel";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CrudStoreModule.constants";
import ICrudViewModel from "@/modules/crud/components/ICrudViewModel";
import { Store } from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudViewModel from "@/modules/crud/components/CrudViewModel";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
import IEmployeeFormViewModel from "@/modules/employees/components/EmployeeForm/IEmployeeFormViewModel";

describe("CrudViewModel", () => {
  class TestCrudViewModel extends CrudViewModel<
    IEmployeeEntity,
    EmployeeStoreState
  > {
    public mounted() {
      debugger;
      super.mounted();
    }
  }
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
  describe("columns", () => {
    describe("list contains elements ", () => {
      it("return a list of the fields", () => {
        // Arrange
        testCrudViewModel.$store = {
          state: {
            entityList: [
              new Employee(
                "some id",
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              )
            ]
          }
        } as Store<EmployeeStoreState>;
        const expectedColumns = [
          "id",
          "firstName",
          "lastName",
          "phoneNumber",
          "city",
          "state",
          "country",
          "hireDate",
          "employmentEndDate"
        ];
        // Act
        const actualColumns = ((testCrudViewModel as unknown) as IEmployeeViewModel)
          .entityColumns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
    describe("list has no elements", () => {
      it("returns empty array", () => {
        // Arrange
        const list: IEmployeeEntity[] = [];
        testCrudViewModel.$store = {
          state: {
            entityList: list
          }
        } as Store<EmployeeStoreState>;
        const expectedColumns: string[] = [];
        // Act
        const actualColumns = ((testCrudViewModel as unknown) as IEmployeeViewModel)
          .entityColumns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
  });
  describe("formModel", () => {
    it("returns the createOptionsState", () => {
      // Arrange
      const expectedFormModel = new CreateEmployeeOptions();
      testCrudViewModel.crudStore.state.createFormModel = expectedFormModel;

      // Act
      const actualFormModel = testCrudViewModel.formModel;

      // Assert
      expect(actualFormModel).toEqual(expectedFormModel);
    });
  });
  describe("closeForm", () => {
    it("sets showFormModal to false", () => {
      // Arrange
      testCrudViewModel.crudStore.state.shouldShowForm = true;
      // Act
      testCrudViewModel.closeForm();

      // Assert
      expect(testCrudViewModel.crudStore.state.shouldShowForm).toBeFalsy();
    });
  });
  describe("showForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      testCrudViewModel.crudStore.state.shouldShowForm = false;

      // Act
      testCrudViewModel.showForm();

      // Assert
      expect(testCrudViewModel.crudStore.state.shouldShowForm).toBeTruthy();
    });
  });
  describe("shouldShowForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      const expectedShouldShowForm = false;
      testCrudViewModel.crudStore.state.shouldShowForm = expectedShouldShowForm;

      // Act
      const actualShouldShowForm = testCrudViewModel.shouldShowForm;

      // Assert
      expect(actualShouldShowForm).toEqual(expectedShouldShowForm);
    });
  });
});
