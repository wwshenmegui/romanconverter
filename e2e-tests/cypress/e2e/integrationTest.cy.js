describe("Roman Numeral Converter E2E Test", () => {
    it("converts a number to a Roman numeral", () => {
        cy.visit("http://localhost:3000"); // Ensure frontend is running

        // Enter number into the input field
        cy.get("input").type("10");

        // Click the Convert button
        cy.get("button").click();

        // Assert that the correct Roman numeral is displayed
        cy.contains("Roman numeral: X");
    });
});
