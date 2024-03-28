
Cypress.Commands.add('post_new_board', (boardName) => {
  cy.api({
    method: 'POST',
    url: '/boards/?name='+boardName+'&key='+Cypress.env("trello_key")+'&token='+Cypress.env("trello_token"),
  })
})
//criar card
Cypress.Commands.add('post_new_card', (cardName, idList) => {
  cy.api({
    method: 'POST',
    url: '/cards/?name='+cardName+'&idList='+idList+'&key='+Cypress.env("trello_key")+'&token='+Cypress.env("trello_token"),
  })
})
//excluir card
Cypress.Commands.add('delete_card', (cardId) => {
  cy.api({
    method: 'DELETE',
    url: '/cards/'+cardId+'?key='+Cypress.env("trello_key")+'&token='+Cypress.env("trello_token"),
  })
})
//excluir board
Cypress.Commands.add('delete_board', (boardId) => {
  cy.api({
    method: 'DELETE',
    url: '/boards/'+boardId+'?key='+Cypress.env("trello_key")+'&token='+Cypress.env("trello_token"),
  })
})
//criar lista
Cypress.Commands.add('post_new_list', (boardId) => {
  cy.api({
    method: 'POST',
    url: '/lists/?name=lista teste&idBoard='+boardId+'&key='+Cypress.env("trello_key")+'&token='+Cypress.env("trello_token"),
  })
})