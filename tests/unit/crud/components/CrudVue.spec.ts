import CrudView from "@/modules/crud/components/CrudView.vue";
import Employee from "@/modules/employees/models/Employee/Employee";
import ICrudView from "@/modules/crud/components/ICrudView";

describe("CrudVue", () => {
  let crudView: CrudView;
  beforeEach(() => {
    crudView = new CrudView();
  });
  describe("columns", () => {
    // Arrange
    class ExtendedCrudView extends CrudView<Employee> {}
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
    const actualColumns = ((crudView as unknown) as ICrudView<Employee>)
      .columns;

    // Assert
    expect(actualColumns).toEqual(expectedColumns);
  });
});
