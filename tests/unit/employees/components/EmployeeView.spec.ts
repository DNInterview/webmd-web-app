import EmployeeView from "@/modules/employees/components/EmployeeView.vue";
import Employee from "@/modules/employees/models/Employee/Employee";
import IEmployeeView from "@/modules/employees/components/IEmployeeView";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CRUDStoreModule.constants";
import ICrudView from "@/modules/crud/components/ICrudView";
import { Store } from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";

describe("EmployeeView", () => {
  let employeeView: EmployeeView;
  beforeEach(() => {
    employeeView = new EmployeeView();
  });
  describe("mounted", () => {
    it("calls getList", () => {
      // Arrange
      employeeView.$store = {} as Store<EmployeeStoreState>;
      employeeView.$store.dispatch = jest.fn();

      // Act
      ((employeeView as unknown) as ICrudView<Employee>).mounted();

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
            list: [
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
          .columns;

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
            list
          }
        } as Store<EmployeeStoreState>;
        const expectedColumns: string[] = [];
        // Act
        const actualColumns = ((employeeView as unknown) as IEmployeeView)
          .columns;

        // Assert
        expect(actualColumns).toEqual(expectedColumns);
      });
    });
  });
});
