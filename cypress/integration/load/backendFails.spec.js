
import { getDataTestSelector } from '../../../src/utils/testUtils'

describe('Load page error', () => {
    beforeEach(() => {
        cy.server()

        cy.route({ method: 'GET', url: '/products', status: 500, response: [] })
        cy.visit('/products')
    })

    it('render error message', () => {
        cy.get(getDataTestSelector('message')).contains('Sorry, an error occurred while trying to recover the products')
    })



})

