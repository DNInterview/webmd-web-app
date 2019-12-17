describe("EmployeeView", () => {
  describe("/", () => {
    describe("on load", () => {
      it("Displays Employee View", () => {
        // Arrange
        const tableSelector = "employee-view__entity-list";
        const tableColumns = [
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
        cy.visit(Cypress.env("local").baseUrl);

        // Act
        cy.visit("/");

        // Assert
        tableColumns.forEach(columnName => {
          cy.get(tableSelector).contains(columnName);
        });
      });
    });
  });
});
