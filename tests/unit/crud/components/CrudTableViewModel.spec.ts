import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeViewModel from "@/modules/employees/components/IEmployeeViewModel";
import { Store } from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudTableViewModel from "@/modules/crud/view-models/table-view/CrudTableViewModel";
import { ICrudStoreState } from "@/modules/crud/stores/ICrudStoreState";
import ICreateEntityOptions from "@/modules/crud/options/ICreateEntityOptions";

describe("CrudTableViewModel", () => {
  let testCrudViewModel: CrudTableViewModel<IEmployeeEntity>;
  beforeEach(() => {
    const employeeStoreState = new EmployeeStoreState(
      [],
      {} as ICreateEntityOptions<IEmployeeEntity>,
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
    describe("list contains elements ", () => {
      it("return a list of the fields", () => {
        // Arrange
        testCrudViewModel.crudState.entityList = [
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
  describe("entityList", () => {
    it("returns the state entity list", () => {
      // Arrange
      const expectedList: IEmployeeEntity[] = [];
      testCrudViewModel.crudState.entityList = expectedList;

      // Act
      const actualList = testCrudViewModel.entityList;

      // Assert
      expect(actualList).toEqual(expectedList);
    });
  });
});
