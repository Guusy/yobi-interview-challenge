
import { getDataTestSelector } from '../../../src/utils/testUtils'

describe('Load page succesful', () => {
    beforeEach(() => {
        cy.server()
        return cy.fixture('products').then(products => {
            cy.route('/products', products)
            cy.visit('/products')
        })
    })

    it('render products', () => {
        cy.get(getDataTestSelector('name')).should('have.length', 2)
    })
    describe('when search in a item', () => {
        it('show only who matchs with the search', () => {
            const searchName = 'Og'
            cy.get(getDataTestSelector('text-field-product')).find('input').type(searchName)
                .should('have.value', searchName)
            const products = cy.get(getDataTestSelector('name'))
            products.should('have.length', 1)
            products.first().contains('OG Kush')

        })
    })
    it('remove items', () => {
        cy.get(getDataTestSelector('remove-button')).each(removeButton => {
            removeButton.click()
        })
        cy.get(getDataTestSelector('name')).should('have.length', 0)

    })
    it('add item', () => {
        const name = "a name"
        const type = "a type"
        const lotId = 10
        cy.get(getDataTestSelector('add-product-button')).click()
        cy.get(getDataTestSelector('button-add-product')).should('be.disabled')
        cy.get(getDataTestSelector('name-add-product')).find('input').type(name)
            .should('have.value', name)
        cy.get(getDataTestSelector('type-add-product')).find('input').type(type)
            .should('have.value', type)
        cy.get(getDataTestSelector('lot-id-add-product')).find('input').type(lotId)
            .should('have.value', '10')
        cy.get(getDataTestSelector('button-add-product')).click()

        cy.get(getDataTestSelector('name')).should('have.length', 3)


    })




})

