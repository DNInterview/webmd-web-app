import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeView from "@/modules/employees/components/IEmployeeView";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CrudStoreModule.constants";
import ICrudViewModel from "@/modules/crud/components/ICrudViewModel";
import { Store } from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudViewModel from "@/modules/crud/components/CrudViewModel";

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
  const employeeView = new TestCrudViewModel();
  describe("mounted", () => {
    it("calls getList", () => {
      // Arrange
      employeeView.$store = {} as Store<EmployeeStoreState>;
      employeeView.$store.dispatch = jest.fn();

      // Act
      ((employeeView as unknown) as ICrudViewModel<Employee>).mounted();

      // Assert
      expect(employeeView.$store.dispatch).toHaveBeenCalledWith(
        CRUD_ACTION_GET_LIST
      );
    });
  });
  describe("columns", () => {
    describe("list contains elements ", () => {
      it("return a list of the fields", () => {
        // Arrange
        employeeView.$store = {
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
        const actualColumns = ((employeeView as unknown) as IEmployeeView)
          .entityColumns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
    describe("list has no elements", () => {
      it("returns empty array", () => {
        // Arrange
        const list: IEmployeeEntity[] = [];
        employeeView.$store = {
          state: {
            entityList: list
          }
        } as Store<EmployeeStoreState>;
        const expectedColumns: string[] = [];
        // Act
        const actualColumns = ((employeeView as unknown) as IEmployeeView)
          .entityColumns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
  });
});
