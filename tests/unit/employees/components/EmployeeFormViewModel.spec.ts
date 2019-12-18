import EmployeeFormViewModel from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModel.vue";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";
import CrudFormViewModel from "@/modules/crud/view-models/form/CrudFormViewModel";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import { Store } from "vuex";

describe("EmployeeFormViewModel", () => {
  let employeeFormViewModel: EmployeeFormViewModel;
  let iEmployeeFormViewModel: CrudFormViewModel<IEmployeeEntity>;
  beforeEach(() => {
    iEmployeeFormViewModel = new EmployeeFormViewModel();
    employeeFormViewModel = iEmployeeFormViewModel;
    employeeFormViewModel.$store = {
      state: {}
    } as Store<IEmployeeEntity>;
  });

  describe("create", () => {
    it("creates entityOptions and creates entity", () => {
      // Arrange
      const expectedOptions = new CreateEmployeeOptions();
      iEmployeeFormViewModel.$store.state.createFormModel = expectedOptions;
      iEmployeeFormViewModel.$store.dispatch = jest
        .fn()
        .mockReturnValueOnce(new Promise(resolve => resolve()));
      // Act
      iEmployeeFormViewModel.submitForm();

      // Assert
      expect(employeeFormViewModel.$store.dispatch).toHaveBeenCalledWith(
        "CRUD_ACTION_CREATE_ENTITY",
        expectedOptions
      );
    });
  });

  describe("formModel", () => {
    it("returns the createOptionsState", () => {
      // Arrange
      const expectedFormModel = new CreateEmployeeOptions();
      iEmployeeFormViewModel.crudState.createFormModel = expectedFormModel;

      // Act
      const actualFormModel = iEmployeeFormViewModel.formModel;

      // Assert
      expect(actualFormModel).toEqual(expectedFormModel);
    });
  });
  describe("closeForm", () => {
    it("sets showFormModal to false", () => {
      // Arrange
      iEmployeeFormViewModel.crudState.shouldShowForm = true;
      // Act
      iEmployeeFormViewModel.closeForm();

      // Assert
      expect(iEmployeeFormViewModel.crudState.shouldShowForm).toBeFalsy();
    });
  });
  describe("showForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      iEmployeeFormViewModel.crudState.shouldShowForm = false;

      // Act
      iEmployeeFormViewModel.showForm();

      // Assert
      expect(iEmployeeFormViewModel.crudState.shouldShowForm).toBeTruthy();
    });
  });
  describe("shouldShowForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      const expectedShouldShowForm = false;
      iEmployeeFormViewModel.crudState.shouldShowForm = expectedShouldShowForm;

      // Act
      const actualShouldShowForm = iEmployeeFormViewModel.shouldShowForm;

      // Assert
      expect(actualShouldShowForm).toEqual(expectedShouldShowForm);
    });
  });
});
