import EmployeeForm from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModel.vue";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import EmployeeFormViewModel from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModel.vue";
import IEmployeeFormViewModel from "@/modules/employees/components/EmployeeForm/IEmployeeFormViewModel";

describe("EmployeeForm", () => {
  let employeeForm: EmployeeFormViewModel;
  beforeEach(() => {
    employeeForm = new EmployeeFormViewModel<IEmployeeEntity>();
  });

  describe("closeForm", () => {
    it("sets showFormModal to false", () => {
      // Arrange
      const abstractedEmployeeForm = (employeeForm as unknown) as IEmployeeFormViewModel<
        IEmployeeEntity
      >;
      abstractedEmployeeForm.showFormModal = true;
      // Act
      abstractedEmployeeForm.closeForm();

      // Assert
      expect(abstractedEmployeeForm.showFormModal).toBeFalsy();
    });
  });
  describe("showForm", () => {
    it("sets showFormModal to true", () => {
      // Arrange
      const abstractedEmployeeForm = (employeeForm as unknown) as IEmployeeFormViewModel<
        IEmployeeEntity
      >;
      abstractedEmployeeForm.showFormModal = false;
      // Act
      abstractedEmployeeForm.showForm();

      // Assert
      expect(abstractedEmployeeForm.showFormModal).toBeTruthy();
    });
  });
});
