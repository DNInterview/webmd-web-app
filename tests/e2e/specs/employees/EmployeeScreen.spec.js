import Employee from "../../../../src/modules/employees/models/Employee/Employee";

describe("EmployeeView", () => {
  it("Displays Employee View", () => {
    // Arrange
    const tableColumns = new Employee(
      "asdf",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ).fields;

    // Act
    cy.visit("/");

    // Assert
    cy.get("thead");
  });
});
