// import '@4tw/cypress-drag-drop'

describe('ドラッグ&ドロップ操作の検証', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it("ProductAをCategoryAからCategoryBに移動させる", () => {
    const dataTransfer = new DataTransfer();
    cy.get("[data-cy='ProductA']")
      .trigger("dragstart", { dataTransfer });
    cy.get("[data-cy='Category_B']")
      .trigger("drop", { dataTransfer });
  });
});