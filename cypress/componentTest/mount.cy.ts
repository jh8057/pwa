import TestPage from '../../src/views/TestPage.vue'

describe('<TestPage />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(TestPage)
    cy.get('input').type('helloWorld')
  })
})