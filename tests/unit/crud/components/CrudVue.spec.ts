import CrudView from "@/modules/crud/components/CrudView.vue";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";

describe("CrudVue", () => {
  let crudView: CrudView;
  beforeEach(() => {
    crudView = new CrudView();
  });
  describe("columns", () => {
    // Arrange
    class ExtendedCrudView extends CrudView<IEmployee> {}
    const expectedColumns = [];
    // Act
    const actualColumns = crudView.columns;

    // Assert
    expect(actualColumns).toEqual(expectedColumns);
  });
});
