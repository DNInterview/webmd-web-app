describe("EmployeeView", () => {
  describe("/", () => {
    describe("on load", () => {
      it("Displays Employee View", () => {
        // Arrange
        const tableRowElement = "tr";
        const tableSelector = ".employee-view__entity-list";
        const tableBodySelector = ".employee-view__list-body";
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

        // Act
        cy.visit(Cypress.env("baseUrl"));

        // Assert
        tableColumns.forEach(columnName => {
          cy.get(tableSelector).contains(columnName);
        });
        cy.get(tableSelector)
          .get(tableBodySelector)
          .find(tableRowElement)
          .should("have.length.greaterThan", 0);
      });
    });
  });
});
