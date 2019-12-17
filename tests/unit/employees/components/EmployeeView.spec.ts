import EmployeeView from "@/modules/employees/components/EmployeeView.vue";
import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeView from "@/modules/employees/components/IEmployeeView";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CRUDStoreModule.constants";

describe("CrudVue", () => {
  let crudView: EmployeeView;
  beforeEach(() => {
    crudView = new EmployeeView();
  });
  describe("mounted", () => {
    it("calls getList", () => {
      // Arrange
      crudView.$store.dispatch = jest.fn();

      // Act
      crudView.mounted();

      // Assert
      expect(crudView.$store.dispatch).toHaveBeenCalledWith(
        CRUD_ACTION_GET_LIST
      );
    });
  });
  describe("columns", () => {
    describe("list exists ", () => {
      it("lists fields", () => {
        // Arrange
        class ExtendedCrudView extends EmployeeView<Employee> {
          list = [
            new Employee("id", null, null, null, null, null, null, null, null)
          ];
        }
        crudView = new ExtendedCrudView();
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
        const actualColumns = ((crudView as unknown) as IEmployeeView<Employee>)
          .columns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
    describe("list has no elements", () => {
      it("lists fields", () => {
        // Arrange
        class ExtendedCrudView extends EmployeeView<Employee> {
          list = [
            new Employee("id", null, null, null, null, null, null, null, null)
          ];
        }
        crudView = new ExtendedCrudView();
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
        const actualColumns = ((crudView as unknown) as IEmployeeView<Employee>)
          .columns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
    describe("list does not exists", () => {
      it("lists fields", () => {
        // Arrange
        class ExtendedCrudView extends EmployeeView<Employee> {}
        crudView = new ExtendedCrudView();
        const expectedColumns: string[] = [];

        // Act
        const actualColumns = ((crudView as unknown) as IEmployeeView<Employee>)
          .columns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
  });
});
