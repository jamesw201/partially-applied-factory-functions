import { describe, it, beforeEach, afterEach } from 'mocha' // eslint-disable-line object-curly-newline
import sinon from 'sinon'
import chai, { expect } from 'chai'
import Account from '../src/Account'

const exampleData = [
    {
        id: '001',
        activated: false
    },
    {
        id: '002',
        activated: true
    },
    {
        id: '003',
        activated: false
    }
]

describe('Account', () => {
    it('should return only active Accounts', async () => {
        const expected = [
            {
                id: '002',
                activated: true
            }
        ]

        const accountClient = (accountId) => ({
            get: () => exampleData
        })

        const account = Account(accountClient)
        const result = await account.getActiveAccounts()
        expect(result).to.deep.eql(expected)
    })
})