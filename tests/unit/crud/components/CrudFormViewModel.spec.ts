import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
import CrudFormViewModel from "@/modules/crud/view-models/form/CrudFormViewModel";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

describe("CrudEntityFormViewModel", () => {
  let testCrudViewModel: CrudFormViewModel<IEmployeeEntity>;
  beforeEach(() => {
    const stubCrudState = new EmployeeStoreState(
      [],
      {} as ICreateEntityOptions<IEmployeeEntity>,
      false
    );
    class TestCrudFormViewModel extends CrudFormViewModel<IEmployeeEntity> {
      get crudState(): ICrudStoreState<IEmployeeEntity> {
        return stubCrudState;
      }
    }
    testCrudViewModel = new TestCrudFormViewModel();
  });

  describe("formModel", () => {
    it("returns the createOptionsState", () => {
      // Arrange
      const expectedFormModel = new CreateEmployeeOptions();
      testCrudViewModel.crudState.createFormModel = expectedFormModel;

      // Act
      const actualFormModel = testCrudViewModel.formModel;

      // Assert
      expect(actualFormModel).toEqual(expectedFormModel);
    });
  });
  describe("closeForm", () => {
    it("sets showFormModal to false", () => {
      // Arrange
      testCrudViewModel.crudState.shouldShowForm = true;
      // Act
      testCrudViewModel.closeForm();

      // Assert
      expect(testCrudViewModel.crudState.shouldShowForm).toBeFalsy();
    });
  });
  describe("showForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      testCrudViewModel.crudState.shouldShowForm = false;

      // Act
      testCrudViewModel.showForm();

      // Assert
      expect(testCrudViewModel.crudState.shouldShowForm).toBeTruthy();
    });
  });
  describe("shouldShowForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      const expectedShouldShowForm = false;
      testCrudViewModel.crudState.shouldShowForm = expectedShouldShowForm;

      // Act
      const actualShouldShowForm = testCrudViewModel.shouldShowForm;

      // Assert
      expect(actualShouldShowForm).toEqual(expectedShouldShowForm);
    });
  });
});
