
import { getDataTestSelector } from '../../../src/utils/testUtils'

describe('Load page succesful', () => {
    beforeEach(() => {
        cy.server()

        cy.route('/products', [{ "name": "OG Kush", "descripton": "This is a test description", "type": "Indica", "hasBulk": true, "hasRetail": true, "batchNumber": 12, "lotId": 10 },
        { "name": "AK47", "descripton": "This is a test description", "type": "Hybrid", "hasBulk": false, "hasRetail": true, "batchNumber": 234, "lotId": 9 }
        ])
        cy.visit('/products')
    })

    it('render products', () => {
        cy.get(getDataTestSelector('name')).should('have.length', 2)
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

