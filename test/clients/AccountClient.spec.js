import { describe, it, beforeEach, afterEach } from 'mocha' // eslint-disable-line object-curly-newline
import sinon from 'sinon'
import chai, { expect } from 'chai'
import axios from 'axios'

import AccountClient from '../../src/clients/AccountClient'

const axiosResponse = {
    data: [
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
}

describe('AccountClient', () => {
    let sandbox

    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('should return the data attribute of the axios response', async () => {
        const accountClient = await AccountClient(axios, 'tenant_001')
        axios.get = sandbox.stub().resolves(axiosResponse)

        const expected = [
            {
                "id":"001",
                "activated":false
            },
            {
                "id":"002",
                "activated":true
            },
            {
                "id":"003",
                "activated":false
            }
        ]

        const result = await accountClient.get()
        expect(result).to.deep.equal(expected)
    })
})
