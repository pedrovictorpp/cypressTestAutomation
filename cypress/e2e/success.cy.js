describe('Testes API TRELLO - Cenários Positivos', () => {
  var cardId;
  var boardId;
  var listId;
  it('[CT01] POST - Cadastrar um board', () => {
    cy.post_new_board("Board Teste")
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body.name).to.eq('Board Teste')
      boardId = response.body.id
    })
  })
  it('[CT02] POST - Cadastrar um card', () => {
    cy.post_new_list(boardId)
      .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body.name).to.eq('lista teste')
      listId = response.body.id

    cy.post_new_card("Card Teste", listId)
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body.name).to.eq('Card Teste')
      cardId = response.body.id
    }) 
  })
  })
    
  it('[CT03] DELETE - Excluir um card', () => {
      cy.delete_card(cardId)
        .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('[CT04] DELETE - Excluir um board', () => {
      cy.delete_board(boardId)
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
})