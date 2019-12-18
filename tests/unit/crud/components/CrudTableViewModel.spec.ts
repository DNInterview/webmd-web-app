import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeViewModel from "@/modules/employees/components/IEmployeeViewModel";
import { Store } from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudTableViewModel from "@/modules/crud/view-models/table-view/CrudTableViewModel";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";
import { EmployeeFormViewModelType } from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModelType";
import Any = jasmine.Any;

describe("CrudTableViewModel", () => {
  let testCrudViewModel: CrudTableViewModel<IEmployeeEntity>;
  beforeEach(() => {
    const employeeStoreState = new EmployeeStoreState(
      [],
      {} as ICreateEntityOptions<IEmployeeEntity>,
      false,
      EmployeeFormViewModelType.Create,
      false
    );
    class TestCrudTableViewModel extends CrudTableViewModel<IEmployeeEntity> {
      get crudState(): ICrudStoreState<IEmployeeEntity> {
        return employeeStoreState;
      }
    }

    testCrudViewModel = new TestCrudTableViewModel();
  });
  describe("entityColumns", () => {
    describe("entity list contains elements ", () => {
      it("return a entity list of the fields", () => {
        // Arrange
        testCrudViewModel.$store = { state: {} } as Store<Any>;
        testCrudViewModel.$store.state.entityList = [
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
        ];
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
        const actualColumns = testCrudViewModel.entityColumns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
    describe("entity list has no elements", () => {
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
  describe("entityList", () => {
    it("returns the state entity list", () => {
      // Arrange
      const expectedList: IEmployeeEntity[] = [];
      testCrudViewModel.$store = { state: {} } as Store<any>;
      testCrudViewModel.$store.state.entityList = expectedList;

      // Act
      const actualList = testCrudViewModel.entityList;

      // Assert
      expect(actualList).toEqual(expectedList);
    });
  });
});
